import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handlerEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlerPasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handlerConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }

    /* click on sign up button */
    const handlerCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("please type same password in confirm password.")
            return;
        }
        if (password.length < 6) {
            setError('please password should be at Least 6 charecter ')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handlerCreateUser}>
                    {/* type your emaile */}
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handlerEmailBlur} type="email" name="Email" id="" required />
                    </div>

                    {/* type your password */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlerPasswordBlur} type="password" name="password" id="" />
                    </div>

                    {/* confirm password fild */}
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handlerConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='input-btn' type="submit" value="Sign Up" />
                </form>
                <p>
                    New to Ema-Jhon? <Link className='sign-up' to="/login">Login</Link>
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

export default SignUp;