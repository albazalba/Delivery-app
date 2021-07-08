import styled from '@emotion/styled'
import React from 'react'
import Arrow from '../../img/ArrowRight.png'

const LoginPage = () => {
    return (
        <PageContainer>
            <div className="page-header">
                <a href="#"><img src={Arrow} alt="Back" /></a>
                <h2>Login</h2>
                <span className="message">Enter your Phone number to continue.</span>
            </div>
            <div className="input-part">
                <input placeholder="Phone Number" type="text" />
                <button className="btn">Continue</button>
            </div>      
            </PageContainer>
    )
}


const PageContainer = styled.div`
   height: 100vh;
   width: 100%;
   position: relative;
   background-color: white;
   .page-header{
       height: 180px;
       background-color: #F1F4F8;
       padding: 10px ;
       img{
           height: 20px;
           transform:scaleX(-1);
       }
       h2{
           padding-top: 100px;
           font-size: 17px;
       }
       .message{
           font-size:13px ;
           color: #7D808C;
       }
   }
   .input-part{
       background-color: white;
       width: 100%;
       input{
        outline: 0;
        border-width: 0 0 1px;
        height: 50px;
        width: 90%;
        font-size: 13px;
        margin-left: 10px;
        margin-top: 20px;
        &:focus{
            border-color: green;
        }
       }
       .btn{
           width: 90%;
           margin-left: 10px;
           font-size: 15px;
           height: 50px;
           margin-top: 20px;
           text-decoration:none;
           border: none;
           font-size: 18px;
           color: #FFFFFF;
           background: #EE5046;
       }
   }
   `


export default LoginPage
