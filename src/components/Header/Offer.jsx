import React from 'react'
import { MdLocalOffer } from 'react-icons/md';
import discount from '../../img/discount.svg'


const offer = (props) => {
    let iconStyles = {color :"rgb(218, 54, 54)", top:"4px", display:"inline=block" }
    return (
        <div className='offer-container'>
            <span className="offer-heading"><img src={discount} alt="" />{props.heading}</span>
            <p>{props.condition}</p>
        </div>
    )
}

export default offer
