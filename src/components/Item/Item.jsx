import './Item.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, name, img, price, stock}) => {
     const { addItem } = useContext(CartContext);

     const handleAddToCart = (quantity) => {
        addItem({ id, name, price}, quantity);
     };


    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name || "Imagen del producto"} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info" style={{ color: stock === 0 ? 'red' : 'inherit'}}>
                    {stock > 0 ? `Stock disponible: ${stock}` : 'Agotado'}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
             </footer>
         </article>
    )
}


export default Item;