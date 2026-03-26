import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'

const Nav = () => {

    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                `mr-4 ${isActive ? "text-[#632EE3] font-semibold" : "text-gray-600"}`
            }
        >
            <li>Home</li>
        </NavLink>

        <NavLink
            to="/apps"
            className={({ isActive }) =>
                `mr-4 ${isActive ? "text-[#632EE3] font-semibold" : "text-gray-600"}`
            }
        >
            <li>Apps</li>
        </NavLink>

        <NavLink
            to="/installed"
            className={({ isActive }) =>
                `mr-4 ${isActive ? "text-[#632EE3] font-semibold" : "text-gray-600"}`
            }
        >
            <li>Installed</li>
        </NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-white shadow-sm text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn cursor-pointer bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;