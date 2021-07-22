import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import styled from '@emotion/styled'
import data from './data'
import Searchbar from '../SearchBar/Searchbar'

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
const Items = ( {filteredItem, handleVegFilter, addToCart, handleCartReduce,} ) => {
    
    return (
        <>
            <Searchbar handleVegFilter={handleVegFilter} />
            <ItemsContainer>
                <h3>Best sellers</h3>
                    {filteredItem.map((item) => (
                        <ItemCard key={item.id} 
                        isVeg={item.isVeg}
                        highlight={item.highlight}
                        itemName={item.name}
                        price={item.price}
                        desc={item.description}
                        img={item.image}
                        addToCart={()=>addToCart(item)}
                        cartCount={item.cartCount}
                        handleCartReduce={() => handleCartReduce(item)}
                         />
                    ))}
                    
                    
            </ItemsContainer>
        </>
    )
}

const ItemsContainer = styled.div`
    bottom: 50px;
    background-color: white;
    min-height: 100% ;
    margin-top: 10px;
    h3{
        color: $text-color-light ;
        font-size: 14px;
        margin-left: 10px;
        padding-top: 10px;
    }`;



export default Items