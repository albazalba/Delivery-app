import React from 'react'
import Header from '../components/Header/Header'
import Searchbar from '../components/SearchBar/Searchbar'
import Items from '../components/Items/Items'
import styled from '@emotion/styled'
import Menu from '../components/Menu/Menu'

const Home = ({filteredItem, cart, handleVegFilter, addToCart, handleCartReduce, cartCount}) => {
    return (
        <HomeContainer >
            <Header />
            <Items 
            filteredItem={filteredItem}
            cart={cart}
            handleVegFilter={handleVegFilter}
            addToCart={addToCart}
            handleCartReduce={handleCartReduce}
            cartCount={cartCount} />
            <Menu />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
padding-bottom:50px;
/* height: 92vh; */
`

export default Home
