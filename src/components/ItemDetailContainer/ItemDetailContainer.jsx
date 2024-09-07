import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from  'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(parseInt(itemId))
           .then(response => {
               setProduct(response);
           })
           .catch(error => {
              console.error(error)
           })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            {product && <ItemDetail {...product}/> }
        </div>
    )
}

export default ItemDetailContainer

// en linea 25 agrege {product &&}