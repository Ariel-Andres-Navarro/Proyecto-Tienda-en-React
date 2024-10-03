import { children } from "react";
import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    total: 0,

});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0 );

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    const addItem = (item, quantity) => {
        const isItemInCart = cart.some(prod => prod.id === item.id);

        if(!isItemInCart) {
           setCart(prev => [...prev, { ...item, quantity }]);
    } else {
        setCart(prev => 
            prev.map(prod => 
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod 
            )
         ); 
       }
    }; 
   
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);   
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContext;