import React from 'react'
import Header from '../components/Header/Header'
import Searchbar from '../components/SearchBar/Searchbar'
import Items from '../components/Items/Items'
import styled from '@emotion/styled'

const Home = () => {
    return (
        <HomeContainer >
            <Header />
            <Searchbar />
            <Items />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
bottom:50px;
height: 92vh;
`

export default Home
