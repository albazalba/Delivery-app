import React from 'react'
import styled from '@emotion/styled'

const MenuItems = (props) => {
    return (
        <MenuContainer>
            <div className="item-name">
                {props.name}
            </div>
            <div className="item quantity">
                {props.quantity}
            </div>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display:flex;
    background-color: white;
    justify-content: space-between;
    padding: 2px;
    .item-name{
        padding: 10px;
    }
`

export default MenuItems
