import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const userName = 'Kevin'
  return (
    <div>
      <Navbar cartAmount={0} />
      <ItemListContainer greeting={userName} />
    </div>
  )
}

export default App
