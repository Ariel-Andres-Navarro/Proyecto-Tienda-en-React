import "./ItemListContainer.css"
import { getProducts, getProductsByCategory } from '../../asyncMock.js';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

        useEffect(() => {
            const fetchProducts  = categoryId ? getProductsByCategory : getProducts;
            
            fetchProducts(categoryId) 
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [categoryId]);
    
        return (
            <div>
                <h1>{saludo}</h1>
                <ItemList products={products} />
            </div>
        )
    }
    
    export default ItemListContainer;