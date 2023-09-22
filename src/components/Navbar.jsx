import logo from '../assets/dumbell.svg'
import notificationBell from '../assets/notificationBell.svg'
import profile from '../assets/profile.png'
import { useState } from 'react'


const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='nav-logo'>
                <div>
                    <img src={logo} alt='logo' className='logo'/>
                </div>
                <span>FitCoach</span>
            </div>
            
            <div className='nav-options'>
                <div className='nav-button'>
                   Training Arena
                </div>
                <div>
                    <img src={notificationBell} alt='notification-bell' className='notificationBell' />
                </div>
                <div>
                    <img src={profile} alt='profile-pic' className='profile' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar