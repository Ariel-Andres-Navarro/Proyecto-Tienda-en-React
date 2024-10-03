import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className='ItemList'>
            {products.length === 0 ? (
                <h2>No hay productos disponibles</h2>
            ) : (
                products.map(prod => (
                    <Item key={prod.id} {...prod} />
                ))
            )}
        </div> 
    );
};

export default ItemList;