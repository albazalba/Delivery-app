import React from 'react'
import ItemCard from './ItemCard'
import styled from '@emotion/styled'
import data from './data'

const Items = () => {
    const { items } = data;
    return (
        <ItemsContainer>
            <h3>Best sellers</h3>
            {items.map((item) => (
                <ItemCard key={item.id} 
                highlight={item.highlight}
                itemName={item.name}
                price={item.price}
                desc={item.description}
                img={item.image} />
            ))}
        </ItemsContainer>
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