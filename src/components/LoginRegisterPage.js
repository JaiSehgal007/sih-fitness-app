import '../App.css';
import LandingPage from './LandingPage';

function LoginRegisterPage() {
  return (
    <div className="App">

      <div className="LandingPage">
        <LandingPage />
      </div>

      <div className="title">Your Fitness Tracker</div>
      <div className="button-container">
        <a className='StylizedButton' href='/'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </a>

        <a className='StylizedButton' href='/'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>
      </div>

    </div>
  );
}

export default LoginRegisterPage;
