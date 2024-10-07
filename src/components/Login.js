import React, { useRef, useState } from 'react';
import { checkValidData, checkValidDataSignUp } from '../utils.js/validate';
import { auth } from '../utils.js/firebase'; // Import Firebase auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    const name = useRef(null);
    const phonenumber = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        let msg;
        if (isSignIn) {
            msg = checkValidData(email.current.value, password.current.value);
        } else {
            msg = checkValidDataSignUp(
                email.current.value,
                password.current.value,
                name.current.value,
                phonenumber.current.value
            );
        }

        setMessage(msg);

        if (msg) return;

        if (!isSignIn) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                    }).then(() => {
                        // Profile updated!
                        navigate('/home');
                    });
                })
                .catch((error) => {
                    setMessage(error.code + "-" + error.message);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    navigate('/home');
                })
                .catch((error) => {
                    setMessage(error.code + "-" + error.message);
                });
        }
    };

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/abstract-shadowy-textures-subtle-highlights-luminescence-seep-through-dark-background_764067-9315.jpg")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md p-8 bg-black bg-opacity-75 rounded-lg mx-4">
                    <h1 className='text-white text-3xl font-bold mb-4'>
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </h1>
                    <input
                        ref={email}
                        type='text'
                        placeholder='Email Address'
                        className='py-2 m-2 w-full bg-gray-500 text-white'
                    />
                    {!isSignIn && (
                        <>
                            <input
                                ref={name}
                                type='text'
                                placeholder='Full Name'
                                className='py-2 m-2 w-full bg-gray-500 text-white'
                            />
                            <input
                                ref={phonenumber}
                                type='number'
                                placeholder='Phone Number'
                                className='py-2 m-2 w-full bg-gray-500 text-white'
                            />
                        </>
                    )}
                    <input
                        ref={password}
                        type='password'
                        placeholder='Password'
                        className='py-2 m-2 w-full bg-gray-500 text-white'
                    />

                    <p className='text-red-400 font-bold p-2'>{message}</p>

                    <button className='py-2 m-2 bg-teal-500 text-white w-full' onClick={handleButtonClick}>
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </button>
                    <p className='py-6 text-white cursor-pointer' onClick={toggleSignIn}>
                        {isSignIn ? 'Are you new to Good? Sign up now' : 'Already have an account? Sign In'}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
