import React from 'react'
import styled from '@emotion/styled'
import Img from '../../img/ArrowRight.png'

const Account = () => {
    return (
        <main>
        <Cover />
        <AccountPage>
                <div className="profile-head">
                    <img className="profile-image" src="https://static.toiimg.com/thumb/msid-76729750,width-1200,resizemode-4/76729750.jpg" alt="Profile" />
                    <span className="profile-name">Thomas Shelby<br />
                    <span className="place">United Kingdom</span>
                    </span>
                </div>
                <div className="profile-details">
                    <span className="detail-heading">Profile Settings</span>
                    <div className="profile-setting">
                        <a href="#">Bio</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                    <div className="profile-setting">
                        <a href="#">Send Notificarions</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                    <div className="profile-setting">
                        <a href="#">Theme</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                </div>
                <div className="profile-details">
                    <span className="detail-heading">Account</span>
                    <div className="profile-setting">
                        <a href="#">Authentication</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                    <div className="profile-setting">
                        <a href="#">Language</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                </div>
                <div className="profile-details">
                    <span className="detail-heading">Support</span>
                    <div className="profile-setting">
                        <a href="#">Call us</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                    <div className="profile-setting">
                        <a href="#">Feedback</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                    <div className="profile-setting">
                        <a href="#">Logout</a>
                        <img src={Img} alt="Change Bio"></img>
                    </div>
                </div>
            </AccountPage>
        </main>
    )
}

const Cover = styled.div`
        top: 0;
        width: 100%;
        z-index: -1;
        height: 180px;
        background-image: linear-gradient(to right, #d31027, #ea384d);`

const AccountPage = styled.div`
    display: flex;
    top: -20px;
    flex-flow: column;
    width: 100%;
    height: 100%;
    border-top: 1px solid white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    background-color: white;
    margin-bottom: 20px;
    .profile-head{
        display: flex;
        width: 100%;
        top: 20%;
        margin-left: 30px;
        margin-top: -50px;
        .profile-image{
            width: 110px;
            height: 100px;
            border-radius: 50%;
        }
        .profile-name{
            font-weight: 700;
            font-size: 15px;
            margin-top: 55px;
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
    .profile-details{
        display: flex;
        flex-flow: column;
        width: 100%;
        margin-top: 30px;
        margin-left: 8px;
        .detail-heading{
            font-size: 15px;
            font-weight: 700;
            text-transform: uppercase;
            width: 100%;
            margin-top: 10px;
            margin-left: 3px;
            padding-bottom: 10px;
            color: black;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                width: 90%;
                height: .5px;
                bottom: 0;
                opacity: .4;
                background-color: gray;
                left: 50%;
                transform: translateX(-55%);

            }       
        }
        .profile-setting{
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            margin-left: 10px;
            a{
                text-decoration: none;
                font-size: 13px;
                font-weight: 400;
                color: #b3b2b2;
            }
            img{
                height: 13px;
                color: #b3b2b2;
                margin-right: 35px;
            }
        }        
    }
`;

export default Account
