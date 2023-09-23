import React from 'react';
import ErrorGif from '../assets/404.gif'
import Navbar from './Navbar';

import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();
    
    function handleHome() {
        //   e.preventDefaults;
          navigate("/main");
        }

  return (
    <>
        <Navbar />
        <div className='pageNotFound'>
            <div className='pageNotFoundText'>Sorry, We can not find your requested webpage</div>
            <img src={ErrorGif} alt='404-gif' className='errorGif' />

            <div>
                <button onClick={handleHome} className='headToHome'>
                    Go back to Home
                </button>
            </div>
        </div>
    </>
  )
}

export default PageNotFound