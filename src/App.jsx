import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer saludo={'HOLA BIENVENIDOS'} />
     <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
    </div>
  );
}

export default App;

