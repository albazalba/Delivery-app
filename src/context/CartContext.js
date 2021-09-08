import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] =useState([]);
    console.log("cartcontext"+cart)
    return(
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}