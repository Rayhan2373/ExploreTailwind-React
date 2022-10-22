import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const location = useLocation();
    const Navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginForm=(event)=>{
        event.preventDefault()
        const emailField = event.target.email.value;
        setEmail(emailField)
        const passwordField = event.target.password.value;
        setPassword(passwordField)
        signInWithEmailAndPassword(email, password)
        .then(()=>{
            Navigate(from, {replace:true})
        })
        event.target.reset()
    }
    return (
        <div className="w-64 mx-auto pt-4">
            <h1 className="mb-3 text-center text-2xl font-semibold">
                Please Sign In
            </h1>
                <button
                    type="submit"
                    className="text-white mb-2 bg-gradient-to-r from-orange-600 to-green-400 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login with Google
                </button>
                <button
                    type="submit"
                    className="text-white mb-2  bg-gradient-to-r from-blue-500 to-purple-800  hover:from-lime-500 hover:to-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login with Facebook
                </button>
                <hr className="bg-black mt-3 mb-3" style={{ padding: "0.3px" }} />
            <form onSubmit={handleLoginForm}>
                <div className="mb-3">
                    <label
                        for="email"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="xyz@gmail.com"
                        required=""
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        placeholder="******"
                    />
                </div>
                <div className="flex items-start mb-2">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required=""
                        />
                    </div>
                    <label
                        for="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-yellow-700 to-orange-600 hover:from-amber-600 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login
                </button>
            </form>
            <hr className="bg-black mt-3 mb-3" style={{ padding: "0.3px" }} />
            <span>
                <p className="mr-1 inline">Create An Account ? </p>

                <Link to="/sign-up">
                    <button
                        type="submit"
                        className="text-white mb-5 bg-gradient-to-r from-yellow-400 to-orange-600  hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sign Up
                    </button>
                </Link>
            </span>
        </div>
    );
};

export default Login;
