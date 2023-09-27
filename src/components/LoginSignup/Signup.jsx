import React from 'react';
import axios from 'axios';

import { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom'
import input_img from '../Assets/enter.png'


const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [answer, setAnswer] = useState('');

  const [error, setError] = useState(false)

  const registerUser = async (userData) => {
    try {
      const response = await axios.post('https://sih-fitness-app-api.onrender.com/api/v1/auth/register', userData);
      // if(!response.ok) throw new Error("Something went wrong while registrering")
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  function handleSubmit() {
    console.log("form submitted")

    const newUser = {
      name,
      email,
      password,
      age,
      gender,
      answer,
    };

    registerUser(newUser)
      .then((data) => {
        console.log("sign up data",data);
        navigate('/login');
      })
      .catch((error) => {
        console.error(error); 
      });

  }

  function handleSwitch() {
    navigate('/login');
  }
  return (
    <div className="bg">
      <div style={{ display: 'block' }} className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="input">
          <img height={'24px'} width={'24px'} src={input_img} alt="" />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input">
          <img height={'24px'} width={'24px'}  src={input_img} alt="" />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div  className="input">
          <img height={'24px'} width={'24px'}  src={input_img} alt="" />
            <input
              type="text"
              placeholder="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>Sign Up</div>
            <div className="submit gray" onClick={handleSwitch}>Login</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup