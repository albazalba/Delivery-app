import React, { useState } from 'react'
import styled from '@emotion/styled'
import MenuItems from './MenuItems';

const menuItems = {
    items : [
        {
            id:"1",
            name: "Appetizer",
            quantity : "17",
        },
        {
            id:"2",
            name: "Main Course",
            quantity : "17",
        },
        {
            id:"3",
            name: "Bowl",
            quantity : "17",
        },
        {
            id:"4",
            name: "Meals",
            quantity : "17",
        },
        {
            id:"5",
            name: "Noodles",
            quantity : "17",
        },
    ],
};


const Menu = () => {
    const { items } = menuItems;
    const [open, setOpen] = useState(false);
    const toggle = () =>setOpen(!open);
    console.log(open)
    return (
        <>
        <Overlay style={{ display: open ? "block" : "none" }}/>
            <MenuContainer>
                
                <div className={open ? "menu-container-open" : "menu-container-close" }>
                    {items.map((item) => (
                        <MenuItems key={item.id} 
                        name = {item.name}
                        quantity = {item.quantity} />
                    ))}
                </div>
                
                <button className={open ? "btn-close" : "btn-open"} onClick={() => toggle()} >{open ? 'Close' : 'Menu'}</button>
            </MenuContainer>

        </>
    )
}
const Overlay =styled.div`
    position:fixed;
    width: 100vw;
    height: 100vh;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #5890D4;
    opacity: 38%;
    `

const MenuContainer = styled.div`
    position: fixed;
    width: 100%;
    bottom: 70px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    .btn-close, .btn-open{
        border: none;
        width: 90px;
        height: 30px;
        color: white;
        border-radius: 200px;
    }
    .btn-close{
        background-color: grey;
    }
    .btn-open{
        background-color: #5890D4;
    }
    .menu-container-open, .menu-container-close{
        width: 226.62px;
        height: 100%;
        margin-bottom:10px;
        padding: 15px;
        background-color: white;
        border: 1px solid #e6dfdf;
        border-radius: 10px;
        /* animation: ease; */
        font-size: 12px; 
        }
        @keyframes growDown {
            0% {
                transform: scaleY(0)
            }
            80% {
                transform: scaleY(1.1)
            }
            100% {
                transform: scaleY(1)
            }
    }
    .menu-container-open{
        animation: growDown 300ms ease-in-out;
        transform-origin: bottom center; 
    }
    .menu-container-close{
        animation: growUp 300ms ease-in-out forwards;
        transform-origin: bottom center;
        @keyframes growUp {
            0% {
                transform: scaleY(1)
            }
            100% {
                transform: scaleY(0);
                display: none;
                height: 0;
                width: 0;
            }
    }
`

export default Menu
