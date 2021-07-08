import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import styled from '@emotion/styled'

const TEXT_COLOR_LIGHT = "#535665";
const ItemCard = (props) => {
    return (
        <ItemCardContainer>
            <div className='left'>
                <span className='highlight'> <AiFillStar /> {props.highlight}</span>
                <h4>{props.itemName}</h4>
                <span className="price">{props.price}</span>
                <span className="desc">{props.desc}</span>
            </div>
            <div className="right">
                <div className="image-container">
                    <img  src={props.img} alt="item" />
                <div className="btn-container">
                    <button className='add-btn'>ADD</button>
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
    &::after{
        content: "";
        bottom: 0;
        width: 80%;
        opacity: .2;
        height: 0.5px;
        background-color: ${TEXT_COLOR_LIGHT};
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
                opacity: .9;
                &:hover{
                    opacity: 1;
                }  
                
            }
            
        }
        }
    }`;

export default ItemCard
