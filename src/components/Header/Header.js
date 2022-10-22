import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import {signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(true);
    const [user] = useAuthState(auth);
    return (
        <nav className="header-container p-2 w-full bg-pink-300  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img
                        className="mr-3 h-6 sm:h-7 rounded-full"
                        srcSet="logo-1.jpg"
                        alt=""
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Online Shop
                    </span>
                </a>
                <button
                    onClick={() => setOpen(!open)}
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex justify-center items-center ml-3 text-gray-900 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    ) : (
                        "X"
                    )}
                </button>
                <div
                    className={`w-full md:block md:w-auto ${open ? "hidden" : "top-[-120px]"
                        }`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <CustomLink to='/' className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Home </CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/shop' className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/order' className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Order </CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/contact' className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Contact </CustomLink>
                        </li>
                        <li>
                        { user ? <button onClick={()=>signOut(auth)}>SignOut</button> : 
                            <CustomLink to='/login' className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Login </CustomLink>
                        }
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
