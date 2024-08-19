import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/NavBar/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <ItemListContainer saludo="HOLA BIENVENIDOS" />
    </>
  )
}

export default App
