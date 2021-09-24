import React from 'react'
import { BsSearch } from 'react-icons/bs';
import Switch from './Switch'
import styled from '@emotion/styled'

const TEXT_COLOR_LIGHT = "#535665";

const Searchbar = (props) => {
    return (
        <SearchbarContainer>
            <span className="searchbar-left">Veg only <Switch changeVegFilter={props.handleVegFilter} /></span>
            {/* <div className='search-icon'>
                  <BsSearch />    
            </div>             */}
            <input name="Search" placeholder="Search item" value={props.searchItem} onChange={props.onSearch} />
        </SearchbarContainer>
    )
}
const SearchbarContainer = styled.div` 
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
margin-top: 5px;
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
}
input{
    border: 1px solid #cecaca;
    padding: 4px;
    color: #c5bfbf;
    border-radius: 15px;
    margin-right: 10px;
    font-size: 10px;
    &:focus{
        border: none;
    }
    &:active{
        border: none;
    }
}`;

export default Searchbar
