import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import React, { useState, useContext } from 'react';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price, stock };
        addItem(item, quantity);
    };

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name || "Imagen del producto"} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>Categoría: {category}</p>
                <p className='Info'>Descripción: {description}</p>
                <p className='Info'>Precio: ${price}</p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Ir al carrito</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;