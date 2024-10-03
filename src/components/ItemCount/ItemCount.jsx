import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            alert("No hay más stock disponible");
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={quantity === 0 || stock === 0}>
                    Agregar al Carrito
                </button>
                {stock === 0 && <p className='OutOfStock'>Sin stock disponible</p>}
            </div>
        </div>
    );
};

export default ItemCount;