// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import profile from '../assets/profile.png'

export const Profile = () => {
    const currentUser = {email : "shyam@imaginary.ioata" };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    function handleLogout(e) {
        // e.preventDefaults();
        try {
            setLoading(true);
            // logOut();
            console.log("logged out")
            navigate("/login");
        } catch(error) {
            setError('unable to log in')
        }
    }

    function handleHome() {
    //   e.preventDefaults;
      navigate("/main");
    }

    return (
     <div className='profileContainerOuter'>
        <div className='profileContainer'>
        
            <div>
                <h2 className='profileHeading'>Profile</h2>
            </div>

            <div>
                <img src={profile} alt='profile-image' className='profileImg' />
            </div>

           <div className='profileText'>

                <div className='profileEmail'>
                    <strong>Email:</strong> {currentUser.email}
                </div>

                <div>
                    {error && <p className='errorProfile'>{error}</p>}
                </div>

                <Link className='updateProfileButton' to="/update-profile">
                        Update Profile
                </Link>

                <div>
                    <button onClick={handleLogout} className='profilePageLogOut'>
                    Log Out
                    </button>
                </div>
                <div>
                    <button onClick={handleHome} className='headToHome'>
                    Go back to Home
                    </button>
                </div>
        </div>
           </div>
    </div>
    )
}
