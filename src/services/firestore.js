// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  addDoc,
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  where,
  query,
  updateDoc,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCddJ4IdHzyUPoFlYFrMJS-MBMH3MFHX5M',
  authDomain: 'music-store-coder-house.firebaseapp.com',
  projectId: 'music-store-coder-house',
  storageBucket: 'music-store-coder-house.appspot.com',
  messagingSenderId: '480764370385',
  appId: '1:480764370385:web:870e9a140228e46f03d4f0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export async function getProducts(categoryId) {
  const productsCollection = collection(db, 'products')
  if (categoryId) {
    const q = query(productsCollection, where('category', '==', categoryId))
    const docSnapshot = await getDocs(q)
    const dataProducts = docSnapshot.docs.map((item) => {
      const product = {
        ...item.data(),
        id: item.id,
      }
      return product
    })
    return dataProducts
  } else {
    const docSnapshot = await getDocs(productsCollection)
    const dataProducts = docSnapshot.docs.map((item) => {
      const product = {
        ...item.data(),
        id: item.id,
      }
      return product
    })
    return dataProducts
  }
}

export async function getProduct(id) {
  const productsCollection = collection(db, 'products')
  const docRef = doc(productsCollection, id)
  const docSnapshot = await getDoc(docRef)
  const productObj = {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  }

  return productObj
}

export async function sendOrder(cart, cartTotal, buyer) {
  const order = {
    buyer: buyer,
    items: cart.map((cartItem) => {
      return {
        name: cartItem.title,
        id: cartItem.id,
        price: cartItem.price,
        quantity: cartItem.quantity,
      }
    }),
    date: new Date(),
    total: cartTotal,
  }
  const db = getFirestore()
  const ordersCollection = collection(db, 'orders')
  const orderDoc = await addDoc(ordersCollection, order)
  reduceStock(cart)

  return orderDoc
}

export async function reduceStock(cart) {
  const db = getFirestore()
  const productsCollection = collection(db, 'products')
  cart.forEach(async (cartItem) => {
    const docRef = doc(productsCollection, cartItem.id)
    const docRefData = await getDoc(docRef)
    const itemStock = docRefData.data().stock
    updateDoc(docRef, { stock: itemStock - cartItem.quantity })
  })
}

export default db
