import React from 'react';

const Navbar = () => {

    const s =
        <>
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered rounded-[20px] h-[39px] lg:w-96 text-slate-600" />
            </div>
        </>;


    return (
        <div className="navbar bg-[#d0d7e1] rounded-xl lg:px-[10px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {s}
                    </ul>
                </div>
                <a className="font-mono text-[#5b5b5b] text-xl font-bold ml-[5px]" href='/'>REACT JS</a>
            </div>
            <div className="navbar-center hidden md:flex">
                {s}
            </div>
            <div className="navbar-end">
                <button class="btn btn-outline text-[#5b5b5b]">Sing Up</button>
                {/* <button className="btn btn-ghost btn-circle mr-[5px]">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-9 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='person img' />
                    </div>
                </label> */}
            </div>

        </div>
    );
};

export default Navbar;