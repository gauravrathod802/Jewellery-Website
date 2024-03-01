import { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
    const navigate = useNavigate();

    const gotoSignUp = () => {
        navigate("/Jewellery-Website/sign-up");
    }

    const handleToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(<FaEye />);
        } else {
            setPasswordType('password');
            setPasswordIcon(<FaEyeSlash />);
        }
    }

    return (
        <div className='main'>
            <div className="login-container">
                <form action="" className='loginForm'>
                    <h2>Login</h2><br />
                    <div className="inputWithIcon">
                        <FaUser className="icon" />
                        <input type="email" name="email" id="email" placeholder='Enter Email' />
                    </div>
                    <div className="inputWithIcon">
                        <span className='eyeIcon' onClick={handleToggle} >
                            {passwordIcon}
                        </span>
                        <FaLock className="icon" />
                        <input type={passwordType} name='password' id="password" placeholder='Enter Password' />
                    </div>
                    <input type="submit" value="Login" className='loginBtn' />
                    <p>Don&apos; t have an account? <a href="#" onClick={gotoSignUp}>Sign Up</a></p>
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

export default Login