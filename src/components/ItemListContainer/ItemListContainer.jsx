import "./ItemListContainer.css"
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const ItemListContainer = ({saludo}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { itemId } = useParams();
    const { categoryId } = useParams();

        useEffect(() => {
            setLoading(true);
            setError(null);

            const collectionRef = categoryId

            ? query(collection(db, 'items'), where('category', '==', categoryId)) 
            : collection(db, 'items');
            
            getDocs(collectionRef)
            .then(response => {
                const adaptedProducts = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data}
                });
                setProducts(adaptedProducts);
            })
            .catch(error => {
                console.error(error);
                setError("Error al cargar los productos. Intenta nuevamente.");
            })
            .finally(() => {
                setLoading(false);
            });
        }, [categoryId]);

        if (loading) return <h2>Cargando...</h2>;
        if (error) return <h2>{error}</h2>;
        if (products.length === 0) return <h2>No hay productos disponibles</h2>
    
        return (
            <div>
                <h1>{saludo}</h1>
                <ItemList products={products} />
            </div>
        )
    }
    
    export default ItemListContainer;