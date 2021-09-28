import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import Arrow from '../../img/ArrowRight.png'
import { useAuth } from '../../context/AuthContext'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmed, setPasswordConfirmed] = useState("")
    const [message, setMessage] = useState("")
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


async function handleSubmit(e) {
    e.preventDefault()

    if (password !== passwordConfirmed) {
        return setError('passwords do not match')
    } else {
        try {
            setLoading(true)
            setError('')
            await signup(email, password)
            toast("Account has been created")
            props.history.push("/home")
        }catch {
            setError('Failed to create an account')
        } 
        setLoading(false)
    }
}

    return (
        <PageContainer>
            <div className="page-header">
                <a href="#"><img src={Arrow} alt="Back" /></a>
                <h2>Sign Up</h2>
                <span className="message">Enter your details to Signup.</span>
            </div>
            {error && <div className="error-container"><span className="error">{error}</span></div>}
            <form className="input-part" onSubmit={handleSubmit}>
                <input placeholder="E-mail" type="text" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <input placeholder="Confirm password" type="password" onChange={(e) => setPasswordConfirmed(e.target.value)}  />
                <button className="btn" type="submit">Continue</button>
            </form>     
            <div className="login">Already have an accoount? <Link to='/login'>Login</Link></div> 
            <ToastContainer />
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
   .error-container{
       display: flex;
       justify-content: center;
       margin: 10px 0;
    color: #737373;
       .error{
        text-align: center;
        /* border: 1px solid; */
        width: 75%;
        padding: 10px;
        background: #ff000017;
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
   .login{
        margin:10px;
        color: #7D808C;
        text-align: center;
   }
   `


export default Signup
