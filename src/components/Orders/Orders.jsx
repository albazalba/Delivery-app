import React from 'react'
import styled from '@emotion/styled'
import ArrowIcon from '../../img/ArrowRight.png'
import RetaurantImg from '../../img/leonGrill.svg'
import Suggestion from '../../img/suggestion.svg'
import { PRIMARY, TEXT_LIGHT } from '../../Styles/themes'
import CartButton from '../Reusable/CartButton'

const Orders = ( {cart, addToCart, handleCartReduce, totalItems, itemTotal, taxes, subTotal} ) => {
    // let taxes = parseInt(Math.round(( 5 / 100 ) * cartTotal).toFixed(2));
    // let itemTotal = parseInt(Math.round(cartTotal + taxes).toFixed(2));
    return (
        <OrderPage>
            <div className="page-header">
                <img className="arrow-icon" src={ArrowIcon} />
                <div className="restaurant-details">
                    <img className="restaurant-image" src={RetaurantImg} />
                    <div>
                        <span className="restaurant-name">Leon Grill</span><br/>
                        <span className="restaurant-address">Sanjay Nagar, New BEL Road</span>
                    </div>
                    <span className="item-count">{totalItems} Items</span>
                </div>
            </div>
            <div className="cart-items">
                {cart.map((item, index) => {
                return(
                    <div className="cart-item-container">
                        <div className="container-left">
                            <span className="item-name">{item.name}</span>
                        </div>
                        <div className="container-right">
                            <div className="btn-container">
                                <CartButton
                                handleCartAdd={()=>addToCart(item)}
                                cartCount={item.cartCount}
                                handleCartReduce={() => handleCartReduce(item)} />
                                </div>
                            <span className="item-price">{item.price}</span>
                        </div>
                    </div>  
                )                        
                })}
            </div>
            <div className="suggestion-section">
                <img src={Suggestion} />
                <input placeholder="Write Suggestions to Restaurant." />
            </div>
            <div className="cart-total">
                <span className="cart-total-header">Bill Details</span>
                <div className="cart-total-details">
                    <span className="item-total">Item total</span>
                    <span className="total-amount">${itemTotal}</span>
                </div>
                <div className="cart-total-details">
                    <span className="item-total">taxes and charges</span>
                    <span className="total-amount">${taxes}</span>
                </div>
                <div className="cart-grand-total">
                    <span style={{fontWeight:600}} className="item-total">Sub total</span>
                    <span style={{fontWeight:600}} className="total-amount">${subTotal}</span>
                </div>              
            </div>
            <div className="cart-bottom">
                <div className="bottom-left">
                    <span className="bottom-price">Rs {subTotal}</span>
                    <span className="bottom-text">View detailed text</span>
                </div>
                <button className="bottom-right">
                    MAKE PAYMENT
                </button>
            </div>
        </OrderPage>
    )
}

const OrderPage = styled.div`
    height: 94vh;
    width: 100wv;
    position: relative;
    .page-header{
        background-color: white;
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #d4cfcf;
        .arrow-icon{
            transform: rotate(180deg);
            height: 13px;
        }
        .restaurant-details{
            line-height: 15px;
            display: flex;
            padding: 0 15px;
            align-items: center;
            .restaurant-image{
                padding-right: 8px;
            }
            .restaurant-name{
                font-weight:700;
                font-size: 12px;
            }
            .restaurant-address{
                font-size: 10px;
                color: #969696;
            }
            .item-count{
                position: absolute;
                font-size: 11px;
                color: #969696;
                right: 10px;
                bottom: 8px;
            }
        }
    }
    .cart-items{
        background-color: white;
        display: flex;
        flex-flow: column;
        padding: 20px 10px;
        position: relative;
        &:after{
        content: '';
        background-color: #d4cfcf;
        height: .5px;
        width: 90%;
        bottom: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
        .cart-item-container{
            display: flex;
            padding:10px 0;
            justify-content: space-between;
            .container-left{
                .item-name{
                    font-size: 12px;
                    color: ${TEXT_LIGHT};
                }
            }
            .container-right{
                display: flex;
                justify-content: center;
                align-items: center;
                .btn-container{
                    margin-right: 10px;
                }
            }
            .item-price{
                font-size: 12px;
            }
        }
    }
    .suggestion-section{
        display: flex;
        background-color: white;
        padding: 12px 10px;
        input{
            border: none;
            padding: 8px 10px;
            font-size: 10px;
            margin: 0 5px;
            width: 100%;
            height: 100%;
            &:focus{
                outline: none;
                border-bottom: 1px solid blue;
            }
        }

    }
    .cart-total{
        background-color: white;
        margin-top: 10px;
        padding: 10px;
        .cart-total-header{
            font-size: 12px;
            font-weight: 600;
        }
        .cart-total-details, .cart-grand-total{
            display: flex;
            font-size:11px;
            justify-content: space-between;
            padding: 10px 0px ;
            position: relative;
           
            }
        }
        .cart-total-details{
            &:after{
                content: '';
                background-color: #d4cfcf;
                height: .5px;
                width: 100%;
                bottom: 0;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
        }
    }
    .cart-bottom{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 50px;
        bottom: 0;
        position: absolute;
        background-color: white;
        .bottom-left{
            width: 50%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            .bottom-price{
                font-weight: 600;
                font-size: 12px;
                padding-left:10px;
            }
            .bottom-text{
                font-size: 12px;
                color: ${PRIMARY};
                padding-left:10px;
            }
        }
        .bottom-right{
            width: 50%;
            background-color: ${PRIMARY};
            border: none;
            color: white;
        }
    }`

export default Orders
