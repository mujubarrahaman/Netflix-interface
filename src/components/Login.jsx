import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import "./LoginStyle.css";

import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const navigate = useNavigate()

    function handleUser(evt){
        setUser(evt.target.value)
    }

    function handlePass(evt){
        setPass(evt.target.value)
    }

    function check(e)
    {
        e.preventDefault();
        if (!user.trim() || !pass.trim()) {
            alert("Please fill in both username and password.");
            return;
          }
      
      
        var loginDetails = axios.get(`netflix-backend.up.railway.app/login?username=${user}&password=${pass}`)
        loginDetails.then(function(data){
            if(data.data===true)
            {
                navigate("/login")
            }
            else{
                navigate("/fail")
            }
        })
    }
  return (
    <div className='container'>
    <nav>
        <a href="#"><img src={logo} alt="Logo" /></a>
    </nav>

    <div className="form-Wrapper">
        <h2>Sign In</h2>

        <div className='form'>

            <div className="form-control">
            <input onChange={handleUser} name='username' type="text" required />
            <label>Email and phone number</label>
            </div>
            
            <div className="form-control">
            <input onChange={handlePass} name='password' type="password" required />
            <label>Password</label>
            </div>

            <button type='submit' onClick={check}>Sign In</button>

            <div className="form_help">
                <div className="remember_me">
                    <input type="checkbox" id='remember_me'/>
                    <label  >Remember me</label>
                </div>
                <a href="#">Need help?</a>
            </div>
        </div>

        <p>New to Netflix? <a href="#">Sign Up Now</a></p>

        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#">Learn More</a>
        </small>

    </div>
    </div>
  )
}

export default Login