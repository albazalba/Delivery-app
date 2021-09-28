import React from 'react'
import {FiHome, FiShoppingCart} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import styled from '@emotion/styled'
import {useRouteMatch, NavLink} from 'react-router-dom'
import homeIcon from '../../img/homeIcon.svg'
import inactiveHomeIcon from '../../img/inactiveHome.svg'
import cartActive from '../../img/cartActive.svg'
import cartInactive from '../../img/cartInactive.svg'
import accountActive from '../../img/accountActive.svg'
import accountInactive from '../../img/accountInactive.svg'
import location from '../../img/location.svg'
import locationActive from '../../img/locationActive.svg'
import { textLight } from '../../Styles/themes'

const Navbar = () => {
    let homeMatch = useRouteMatch("/home");
    let cartMatch =useRouteMatch("/orders");
    let locationMatch = useRouteMatch("/map")
    let accountMatch = useRouteMatch("/account")
    console.log(homeMatch);
    console.log(cartMatch)
    return (
        <NavbarContainer>
            <NavLink to='/home' style={{textDecoration:'none', color:'grey' }} 
                activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='home'>
                <img className="icon" src={homeMatch ? homeIcon : inactiveHomeIcon} />
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink to='/map' style={{textDecoration:'none', color:'grey' }} 
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
            <div className='home'>
            <img className="icon" src={locationMatch ? locationActive : location} />
                <span>Map</span>
            </div>
            </NavLink>
            
            <NavLink to='/orders' style={{textDecoration:'none', color:'grey'}}
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='orders'>
                    <img className="icon" src={cartMatch ? cartActive : cartInactive} />
                    <span>Orders</span>
                </div>
            </NavLink>
            <NavLink to='/account' style={{textDecoration:'none', color:'grey'}}
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='account'>
                    <img className="icon" src={accountMatch ? accountActive : accountInactive} />            
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
        .icon{
            background-color: white;
            height: 20px;
        }
        
     }
    .orders{
        display: flex;
        flex-flow: column;
        align-items: center;
        .icon{
            background-color: white;
            height: 20px;
        }
    }
    .account{
        display: flex;
        flex-flow: column;
        align-items: center;
        .icon{
            background-color: white;
            height: 20px;
        }
    }`;

export default Navbar
