import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import styled from '@emotion/styled'
import data from './data'
import Searchbar from '../SearchBar/Searchbar'

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
const Items = ( {filteredItem, handleVegFilter, addToCart, handleCartReduce, onSearch, searchItem} ) => {
    
    return (
        <>
            <Searchbar handleVegFilter={handleVegFilter} onSearch={onSearch} searchItem={searchItem} />
            <ItemsContainer>
                <h3>Best sellers</h3>
                    {filteredItem?.length && filteredItem.filter((item) => {
                        if(searchItem == "") {
                            return item
                        } else if(item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                            return item
                        }
                        }).map((item) => (
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
                    )) }         
            </ItemsContainer>
        </>
    )
}

const ItemsContainer = styled.div`
    bottom: 50px;
    background-color: white;
    min-height: 100% ;
    margin-top: 5px;
    h3{
        color: $text-color-light ;
        font-size: 14px;
        margin-left: 10px;
        padding-top: 10px;
    }
    .last-child{
        padding-bottom: 20px;
    }`;



export default Items