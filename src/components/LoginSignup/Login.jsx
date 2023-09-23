import React from 'react';
import axios from 'axios';

import {useState} from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (credentials) => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, credentials);
          return response.data;
        } catch (error) {
          console.error('Error logging in:', error);
          throw error;
        }
    };

    function handleSubmit() {
        const loginCredentials = {
        email,
        password,
      };
      console.log("login credentials", loginCredentials);
      loginUser(loginCredentials)
        .then((data) => {
          console.log(data);
          localStorage.setItem('auth', JSON.stringify(data))
          navigate("/main");
        })
        .catch((error) => {
          console.log("error", error);
          console.error(error);
        })
    }

    function handleSwitch() {
        navigate('/signup');
    }
  return (
    <div style={{height:'100vh'}} className="bg">
    <div style={{ display: 'block' }} className="container">
      <div className="header">
        <div className="text">Log in</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="forgot-password">Forgot Password? <span>&nbsp;Click Here!</span></div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="submit-container">
            <div className="submit" onClick={handleSwitch}>Sign Up</div>
            <div className="submit gray" onClick={handleSubmit}>Login</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login