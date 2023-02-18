import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/login'>Sign In</Link></li>
        <li><Link to='/' className=" text-white rounded lg:ml-1" style={{ backgroundColor: '#6c63ff' }}>Job Seeker</Link></li>
        <li><Link to='/' className=" text-white rounded lg:ml-2" style={{ backgroundColor: '#ff6347' }}>Job Poster</Link></li>
    </React.Fragment>
    return (

        <div className="navbar">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-500 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Job Portal</Link>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;