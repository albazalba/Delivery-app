import React, { useContext } from 'react'
import {AiFillStar} from 'react-icons/ai'
import styled from '@emotion/styled'
import { useCart } from 'react-use-cart'
import vegIcon from '../../img/vegIcon.svg'
import nonVegIcon from '../../img/nonVegIcon.svg'
import CartButton from '../Reusable/CartButton'
import { CartContext, CartProvider } from '../../context/CartContext'



const ItemCard = (props) => {
    const { addItem, items, updateItemQuantity } = useCart();
    const { highlight, itemName, price, desc, img, isVeg, addToCart, cartCount, handleCartReduce } = props;
    
    return (
        
        <ItemCardContainer>
            <div className='left'>
                <span className='highlight'><img src={isVeg ? vegIcon : nonVegIcon} /> <AiFillStar /> {highlight}</span>
                <h4>{itemName}</h4>
                <span className="price">${price}</span>
                <span className="desc">{desc}</span>
            </div>
            <div className="right">
                <div className="image-container">
                    <img  src={img} alt="item" />
                    <div className="btn-container">
                        {cartCount>0 
                        ? <CartButton 
                           cartCount={cartCount}
                           handleCartReduce={handleCartReduce}
                           handleCartAdd={addToCart} /> 
                        : <button className="add-btn" onClick={addToCart}>ADD</button>}
                    </div>    
                </div>
            </div>
        </ItemCardContainer>
    )
}

const ItemCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 15px 15px;
    &:last-child{
        padding-bottom: 50px;
    }
    &::after{
        content: "";
        bottom: 0;
        width: 80%;
        opacity: .2;
        height: 0.5px; 
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .left{
        display: flex;
        flex-flow: column;
        color: $text-color-light;
        line-height: 20px;
        padding: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        h4{
            font-size: 12px;
        }
        .price{
            font-size: 11px;
        } 
        .desc{
            font-size: 10px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &:hover{
                overflow: visible;
                white-space: pre-wrap;
                text-overflow: initial;
            }
        }   
        .highlight{
            display: inline-block;
            color: #F09B00;
            font-size: 10px;
        }    
    }
    .right{
        padding-left: 30px;
        position: relative;
        .image-container{
            height: 80px;
            width:80px;
            position: relative;
            img{
                object-fit: cover;
                height: 100%;
                width: 100%;
                border-radius: 10px;
                border: 1px solid #efe9e9;
            }
            .btn-container{
                width: 100%;
                height:40px;
                position: absolute;
                bottom: -20px;
                display: flex;
                justify-content: center;
                align-items: center;
                /* background-color: white; */
                .add-btn{
                background-color: white;
                text-transform: uppercase;
                font-weight:600;
                color:#EE5046;
                border:1px solid #D2D2D6;
                border-radius:3px;
                font-size:11px;
                padding:5px 10px;
                box-sizing: border-box;
                /* opacity: .9; */
                &:hover{
                    opacity: 1;
                } 
            } 
            .item-quantity{
                display: block;
                background-color: white;
                color: #EE5046;
                font-size: 9px;
                
            }
            
        }
        }
    }`;

export default ItemCard
