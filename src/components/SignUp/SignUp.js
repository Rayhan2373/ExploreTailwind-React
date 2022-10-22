import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth  from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSignUpForm=(event)=>{
        event.preventDefault()
        const emailField = event.target.email.value;
        setEmail(emailField)
        const passwordField = event.target.password.value;
        setPassword(passwordField)
        createUserWithEmailAndPassword(email, password)
        event.target.reset()
    }
    if(user){
        navigate('/')
    }
    console.log(email, password, user)
    return (
        <div className='w-80 mx-auto mb-5 mt-3'>
            <h1 className='mb-3 text-center text-2xl font-semibold'>Please Resister</h1>
            <form onSubmit={handleSignUpForm}>
                <div className="mb-2">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" email='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="aburayhankabir73@gmail.com" required="" />
                </div>
                <div className="mb-2">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input type="password" password='password' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>
                <div className="mb-2">
                    <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" />
                </div>
                <div className="flex items-start mb-2">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="/conditions" className="text-blue-500 hover:text-blue-800 dark:text-blue-500">terms and conditions</Link></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
            <hr className="bg-black mt-3 mb-3" style={{padding : "0.3px"}} />
            <span>
                <p className="mr-1 inline">Alreary Have An Account ? </p>
           
                    <Link to='/login'>
                    <button
                    type="submit"
                    className="text-white  bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Login
                    </button>
                    </Link>
            </span>


        </div>
    );
};

export default SignUp;