import { useRef, useState } from 'react';
import profileImage from '../assets/profile.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    // const {UpdateEmail, UpdatePassword, currentUser, UpdateProfileImage } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    const notify = () => toast("ProfileUpdated");

    function handleSubmit(event) {
        event.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError("passwords do not match")
        }

        if(passwordRef.current.value.length < 6) {
            return setError("password should be of at least 6 characters")
        }

        if(passwordRef.current.value === "" && emailRef.current.value === ""){
            return setError("Enter at least one")
        }

        // const promises = []
        // setLoading(true)
        // setError("")

        // if (emailRef.current.value !== currentUser.email) {
        //     promises.push(UpdateEmail(emailRef.current.value))
        // }
        // if (passwordRef.current.value) {
        //     promises.push(UpdatePassword(passwordRef.current.value))
        // }

        // Promise.all(promises)
        // .then(() => {
        //     navigate("/user")
        // })
        // .catch(() => {
        //     setError("Failed to update account")
        // })
        // .finally(() => {
        //     setLoading(false)
        // })

        setShow(true);
        setTimeout(() => navigate("/profile"), 2000)
    }


  return (
    <div className='updateProfilePage'>
        <div className='updateProfileContainer'>
            {show && notify()}
            <div className="updateProfileHeading">
                Update Profile
            </div>

            <div>
                <img src={profileImage} alt='profileImg' className='updateProfileImg' 
                />
            </div>

            <form onSubmit={handleSubmit}>

            {error && <p className="danger">{error}</p>}

            <div className="updateProfileInfo">
                <div id="email" className="formGroup" >
                    <label className='formLabel'>Email</label>
                    <input className='formInput' type="email" placeholder='leave blank to update only email'  ref={emailRef} />
                </div>

                <div id="password" className='formGroup'>
                    <label className='formLabel'>Password</label>
                    <input className='formInput' type="password" placeholder='leave blank to update only password'  ref={passwordRef} />
                </div>

                <div id="confirmPassword" className='formGroup'>
                    <label className='formLabel'>Confirm Password</label>
                    <input className='formInput'type="password" placeholder='leave blank to update only password'  ref={confirmPasswordRef} />
                </div>

                <button type="submit" id='formSubmit'>
                Update
                </button>
            </div>
            </form>

            </div>
        <ToastContainer />
    </div>
  )
}

export default UpdateProfile