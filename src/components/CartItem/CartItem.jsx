import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
      if(window.confirm("¿Estás seguro de que deseas eliminar este artículo?"))
        removeItem(id);
    };

    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
            <button onClick={handleRemove} className='remove-button'>Eliminar</button>
        </div>
    );
};

export default CartItem;
