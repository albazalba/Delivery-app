import React from 'react'
import Offer from './Offer'
import styled from '@emotion/styled'
import star from '../../img/Star.svg'
import background from '../../img/background.jpg'
import { textLight, textExtraLight, themeRed } from '../../Styles/themes'

const Header = () => {
    return (
        <HeaderContainer>
            <div className='heading-section'>
                <h1>Burger king</h1>
                <span className='address'>RMV 2nd Stage, Sanjay Nagar</span><br />
                <span className='category'>America, Fast Food</span>
                <div className="reviews-box">
                    <div className="review-texts">
                        <img src={star} alt="reviews" />3.2 <br /> Reviews
                    </div>
                </div>
                <div className="photos-box">
                    <div className="review-texts">
                          11<br />Photos
                    </div>
                </div>
            </div>        
            <div className='offer-section'>
                <Offer 
                heading="20% off upto Rs 300"
                condition="use PARTY on order above 650" />
                <Offer 
                heading="20% off upto Rs 300"
                condition="use PARTY on order above 650" />
            </div>    
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    padding: 0;
    text-align: center;
    height: 200px;
    background-color: white;  
    position: relative;
    .heading-section{
        padding-bottom: 15px;
        top: 0;
        border-bottom: 1px dotted rgb(71, 71, 71) ;
    } 
    h1{
        color: rgb(71, 71, 71);
        font-size: 16px;
        padding-top: 20px;
        text-transform: uppercase;
    }
    .address{
        color: ${textLight};
        font-size: 11px;
    }
    .category{
        color: $text-color-light;
        font-size: 9px;
    }
    .reviews-box, .photos-box{ 
        display: flex;
        flex-flow: column;
        justify-content: start;
        /* align-items: center; */
        position: absolute;
        border: 1px;
        border-radius: 10px 0 0 10px;
        background-color: #EE5046;
        color: white;
        right: -5px;    
        top: 10px;
        width: 63px;
        height: 35px;
        font-size: 9px;
        .review-texts{
            padding: 4px 9px;
            text-align: start;
            img{
                height: 10px;
            }
        }

    }
    .photos-box{
        top: 50px;
        background-image: url(${background});
    }
}


.offer-section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .offer-container{
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        box-sizing: border-box;
        border-radius: 4.15937px;
        border: 0.831875px solid #DCDCDC;
        height: 59.89px;
        width: 130.08px;
        margin-top: 15px;
        padding: 6px 12px;
        .offer-heading{
            display: inline-block;
            position: relative;
            font-weight: 600;
            font-size: 9.98249px;
            line-height: 15px;
            /* color: ${textLight}; */
            img{
                /* display: inline-block; */
                position: absolute;
                height: 11px;
                left: -8px;
                top: 2.5px;
            }
        }
        p{
            font-size: 7px;
            color: ${textExtraLight};
        }
    }`;

export default Header
