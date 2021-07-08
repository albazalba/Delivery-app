import React from 'react'
import { BsSearch } from 'react-icons/bs';
import Switch from './Switch'
import styled from '@emotion/styled'

const TEXT_COLOR_LIGHT = "#535665";

const Searchbar = () => {
    return (
        <SearchbarContainer>
            <span className="searchbar-left">Veg only <Switch /></span>
            <div className='search-icon'>
                  <BsSearch />    
            </div>            
        </SearchbarContainer>
    )
}
const SearchbarContainer = styled.div` 
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
margin-top: 10px;
background-color: white;
align-items: center;
color: ${TEXT_COLOR_LIGHT};
.searchbar-left{
    font-size: 9px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    text-transform: uppercase ;
    font-weight: 700;
}
.search-icon{
    margin-right: 10px;
}`;

export default Searchbar
