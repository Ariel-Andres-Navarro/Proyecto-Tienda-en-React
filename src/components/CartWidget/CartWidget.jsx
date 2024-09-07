import cart from '../Assets/cart.png'
import './CartWidget.css'


const CartWidget = () => {
    return (
        <div className="cart-container">
           <img src={cart} alt="cart-widget" className="cart-icon"/>
           <span className="cart-count">3</span>
        </div>
    )
}

export default CartWidget