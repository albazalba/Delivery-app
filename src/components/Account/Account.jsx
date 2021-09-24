import React, {useState} from 'react'
import styled from '@emotion/styled'
import Img from '../../img/Me.jpg'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'


const Account = () => {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try{
            await logout()
            history.push('/login')
        } catch {
            setError('failer to logout')
        }
    }

    return (
        <main>
        <Cover>
                <div className="profile-head">
                    <img className="profile-image" src="https://pbs.twimg.com/profile_images/1251864623256465408/2Rr5byMe.jpg" alt="Profile" />
                    <span className="profile-name">{currentUser.email}<br />
                    <span className="place">United Kingdom</span>
                    </span>
                </div>
        </Cover>        
        <AccountPage>
                <div className="profile-details">
                    <h4>Profile</h4>
                    <div className="profile-setting">
                        <a href="#">Bio</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                    <div className="profile-setting">
                        <a href="#">Send Notificarions</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                    <div className="profile-setting">
                        <a href="#">Theme</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                    <div className="profile-setting">
                        <a href="#">Authentication</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                    <div className="profile-setting">
                        <a href="#">Language</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                    <div className="profile-setting">
                        <a href="#">Call us</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                    <div className="profile-setting">
                        <a href="#">Feedback</a>
                        <BsChevronRight className="profile-icon" />
                    </div>
                </div>
                    <div className="btn-container">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
            </AccountPage>
        </main>
    )
}

const Cover = styled.div`
        /* top: 0; */
        position: relative;
        width: 100vw;
        z-index: -1;
        height: 350px;
        background: url("https://thumbs.dreamstime.com/z/food-background-burgers-hand-drawn-illustration-your-design-wallpaper-menu-textile-food-background-burgers-hand-drawn-129275575.jpg");
        background-size: cover;
        .profile-head{
            position: absolute;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin : auto ;
            /* top: 20%; */
            /* margin-left: 30px; */
            /* margin-top: -50px; */
            .profile-image{
                width: 110px;
                height: 100px;
                border-radius: 50%;
                border: 3px solid gray;
                border-bottom: 0;
                padding: 8px;
            }
            .profile-name{
                font-weight: 700;
                font-size: 15px;
                margin-top: 10px;
                color: black;
                text-align:center;
                margin-left: 10px;
                line-height: 13px;
                .place{
                    font-size: 10px;
                    font-weight: 400;
                    text-align:center;
                    opacity: .6;
            
                }
            }
        }
`
const AccountPage = styled.div`
    display: flex;
    top: -30px;
    flex-flow: column;
    width: 100%;
    height: 100%;
    bottom: 0;
    border-top: 1px solid white;
    box-shadow: 0px -5px 10px rgb(185 179 170);
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    position: relative;
    background-color: white;
    padding-bottom: 40px;
    .profile-details{
        display: flex;
        flex-flow: column;
        max-width: 100vw;
        bottom: 0;
        margin: 20px 10px;
        }
        h4{
            padding: 15px 15px;
            font-size: 10px;
            color: gray;
        }
        .profile-setting{
            display: flex;
            justify-content: space-between;
            /* width: 100%; */
            padding: 20px 20px;
            /* margin-left: 10px; */
            a{
                text-decoration: none;
                font-size: 12px;
                font-weight: 600;
                color: black;
            }
            .profile-icon{
                font-size: 12px;
            }
        }        
        .btn-container{
            display: flex;
            justify-content: center;
            max-width: 100vw;
            padding: 10px;
            button {
                border: none;
                background-color: #ea384d;
                border-radius: 20px;
                color: white;
                padding: 9px 16px;
                justify-content: c;
                width: 150px;
                /* margin-right: 35px; */
                
            }
        }   
    }
`

export default Account
