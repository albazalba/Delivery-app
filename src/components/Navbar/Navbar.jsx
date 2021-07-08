import React from 'react'
import {FiHome, FiShoppingCart} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import styled from '@emotion/styled'
import {NavLink} from 'react-router-dom'
import homeIcon from '../../img/homeIcon.svg'
import profile from '../../img/profile.svg'
import cart from '../../img/cart.svg'
import { textLight } from '../../Styles/themes'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLink to='/home' style={{textDecoration:'none', color:'grey' }} 
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
            <div className='home'>
                {/* <img src={homeIcon} /> */}
                <FiHome size={"20px"} />
                <span>Home</span>
            </div>
            </NavLink>
            
            <NavLink to='/orders' style={{textDecoration:'none', color:'grey'}}
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='orders'>
                    <FiShoppingCart size={"20px"} />
                    <span>Orders</span>
                </div>
            </NavLink>
            <NavLink to='/account' style={{textDecoration:'none', color:'grey'}}
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='account'>
                    <BsPerson size={"20px"} />
                    <span>Account</span>
                </div>
            </NavLink>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    display: flex;
    color: #535665;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    width: 100%;
    position: fixed;
    height: 50px;
    background-color: white;
    font-size: 10px;
    list-style: none;
    text-decoration: none;
    z-index:1;
        .home {
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: white;
        
     }
    .orders{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .account{
        display: flex;
        flex-flow: column;
        align-items: center;
    }`;

export default Navbar
