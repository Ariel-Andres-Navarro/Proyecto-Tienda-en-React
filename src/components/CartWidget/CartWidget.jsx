import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import cart from '../Cart/cart.png'

 const CartWidget = () => {
       const { totalQuantity } = useContext(CartContext);

    return (
        <Link  to='/cart' className='CartWidget' >
            <img className='CartImg' src={cart} alt='icono del carrito'/>
            { totalQuantity > 0 && <span className='CartQuantity'>{totalQuantity}</span>}
          
        </Link>
    );
}

export default CartWidget   