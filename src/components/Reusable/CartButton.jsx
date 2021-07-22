import React from 'react'
import styled from '@emotion/styled'
import { PRIMARY } from '../../Styles/themes';

const CartButton = ( {cartCount, handleCartReduce, handleCartAdd} ) => {
    const quantity = 1;

    return (
        <CartButtonContainer>
            <button style={{color: {cartCount} === 1 ? "grey" : "#EE5046"}} className="reduce-btn" onClick={handleCartReduce}>-</button>
            <span className="item-quantity">{cartCount}</span>
            <button className="increase-btn" onClick={handleCartAdd}>+</button>
        </CartButtonContainer>
    )
}

const CartButtonContainer = styled.div`
    border: 1px solid #D2D2D6;
    background-color: white;
    border-radius: 3px;
    padding: 0 8px;
    width: 55px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .reduce-btn, .increase-btn {
        border: none;
        color: ${PRIMARY};
        font-size: 20px;
        background-color: white;
        }
    .reduce-btn{
        bottom: 3.5px;
        font-weight: 600;
    }
    .item-quantity{
        color: ${PRIMARY};
        font-size: 13px;
    }
`

export default CartButton
