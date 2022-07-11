import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './store/CartContext'

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
