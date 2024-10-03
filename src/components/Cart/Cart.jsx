
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart,} = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);


    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Ver Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(item => (
            <CartItem 
               key={item.id}
               id={item.id}
               name={item.name}
               price={item.price}
               quantity={item.quantity}
            />  )) }

            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart