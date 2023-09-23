import logo from '../assets/dumbell.svg'
import notificationBell from '../assets/notificationBell.svg'
import profile from '../assets/profile.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [arena, setArena] = useState(true);
    const navigate = useNavigate();

    function switchArena() {
        setArena(prev => !prev)
        navigate(arena ? "/combat" : "/main");
    }

    function goToHome() {
        navigate("/main");
    }
  return (
    <>
        <div className='navbar'>
            <div className='nav-logo' onClick={goToHome}>
                <div>
                    <img src={logo} alt='logo' className='logo'/>
                </div>
                <span>FitCoach</span>
            </div>
            
            <div className='nav-options'>
                <div className='nav-button' onClick={switchArena}>
                   {arena ? "Training Arena" : "Combat Arena"}
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