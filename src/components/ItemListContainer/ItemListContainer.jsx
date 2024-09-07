import { getProducts } from '../../asyncMock.js';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList.jsx";
                         


const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])

        useEffect(() => {
            getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [])
    
        return (
            <div>
                <h1>{saludo}</h1>
                <ItemList products={products} />
            </div>
        )
    }
    
    export default ItemListContainer