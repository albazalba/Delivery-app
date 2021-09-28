import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import Arrow from '../../img/ArrowRight.png'
import { useAuth } from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';

const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef =useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

async function handleSubmit(e) {
    e.preventDefault()

    try {
        setLoading(true)
        setError('')
        await login(emailRef.current.value, passwordRef.current.value, )
        toast("Logged in")
        history.push("/home")
    }catch {
        setError('Failed to sign in')
    } 
    setLoading(false)
}

    return (
        <PageContainer>
            <div className="page-header">
                <a href="#"><img src={Arrow} alt="Back" /></a>
                <h2>Login</h2>
                <span className="message">Enter your login credentials.</span>
            </div>
            {error && <span>{error}</span>}
            <form className="input-part" onSubmit={handleSubmit}>
                <input placeholder="E-mail" type="text" ref={emailRef} />
                <input placeholder="Password" type="password" ref={passwordRef} />
                <button className="btn" type="submit">Login</button>
            </form>
            <div className="signup">
                <div>Need an account? <Link to='/Signup'>Sign up</Link></div>    
                <Link to='/forgotpassword'><div> Forgot password</div></Link> 
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
   .signup{
       display: flex;
       align-items: center;
       flex-flow:column;
        margin:10px;
        color: #7D808C;
        font-size: 12px;
   }
   `


export default LoginPage
