import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {
  const userName = 'Kevin'
  return (
    <div>
      <Navbar cartAmount={0} />
      <ItemListContainer greeting={userName} />
      <ItemCount stock={3} initial={1} />
    </div>
  )
}

export default App
