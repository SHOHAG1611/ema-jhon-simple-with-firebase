import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='input-btn' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-Jhon? <Link className='sign-up' to="/signup">Sign Up</Link>
                </p>
                <div className='task'>
                    <div>
                        ____________
                    </div>
                    <p className='task-text'>or</p>
                    <div>
                        ____________
                    </div>
                </div>
                <input className='input-google' type="submit" value="Continue with Google" />
            </div>
        </div>
    );
};

export default Login;