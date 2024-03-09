import { useState } from 'react';
import './SignUp.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


// import { createGlobalStyle } from "styled-components";

// const GlobalStyleSignup = createGlobalStyle`


// html,body{
//   font-family: 'lato', sans-serif;
//   font-size: 100%;

//   @media (max-width: 768px) {
//     font-size:50%;
//   }
//   @media (max-width: 450px) {
//     font-size:40%;
//   }
// }
// body{
//   font-size: initial;
// }

// `;





const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

  const navigate= useNavigate();

  const gotoLogin = () => {
    navigate("/Jewellery-Website/login");
  }

  const handleToggle = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setPasswordIcon(<FaEye/>);
    } else {
      setPasswordType('password');
      setPasswordIcon(<FaEyeSlash />);
    }
  }

  return (
    <div className='main'>
      {/* <GlobalStyleSignup/> */}
      <div className="signup-container">
        <form action="" className='myForm'>
          <h2>Sign Up</h2><br />

          <div className="first-name">
            <input type="text" name="firstName" id="firstName" placeholder='First Name' />
          </div>

          <div className="last-name">
            <input type="text" name="lastName" id="lastName" placeholder='Last Name' />
          </div>
          
          <input type="email" name="email" id="email" placeholder='Enter Email' />

          <div className="inputWithIcon">
            <span className='eyeIcon' onClick={handleToggle}>
              {passwordIcon}
            </span>
            <input type={passwordType} name='password' id="password" placeholder='Enter Password' />
          </div>
          <input type="submit" value="Sign up" className='loginBtn' />
          <p>Already have an account? <a href="#" onClick={gotoLogin}>Login</a></p>
          <h4 className='title'>or</h4>
          <p style={{ textAlign: 'center' }}>Sign up using</p>

          <div className="social">
            <button className='google'>
              <a href="#google" className='google'><FcGoogle /></a>
              <span>Login with Google</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
export default SignUp