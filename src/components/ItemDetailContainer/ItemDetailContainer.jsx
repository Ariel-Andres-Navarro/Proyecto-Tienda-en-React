import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/firebase/db';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { itemId } = useParams();
    
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);

            if (!itemId) {
                setError("ID de producto no proporcionado");
                setLoading(false);
                return;
            }

            try {
                const productData = await getProductById(itemId);
                if (!productData) {
                    setError("Producto no encontrado");
                } else {
                    setProduct(productData);
                }
            } catch (error) {
                console.error("Error al cargar el producto:", error);
                setError("Error al cargar el producto. Intenta nuevamente.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [itemId]);

    if (loading) return <h2>Cargando...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className='ItemDetailContainer'>
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;

