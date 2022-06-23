import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemList from './components/ItemList'

function App() {
  const userName = 'Kevin'
  return (
    <div>
      <Navbar cartAmount={0} />
      <ItemListContainer />
    </div>
  )
}

export default App
