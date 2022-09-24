import React from 'react';
import { FaUserFriends } from 'react-icons/fa';

const Right = () => {
    return (
        <div className='Right-side-part'>
            <ul class="menu font-semibold w-56 mt-2 rounded-xl drop-shadow-2xl text-[#5b5b5b]">
                <li className='w-full '>
                    <a className='mx-auto font-semibold' href='/'><FaUserFriends /> Friend List</a>
                </li>
                <li className=''>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <li className=''>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <li className=''>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <div className='friend-bottom-part font-semibold'>
                    <a href="/">Add +</a>

                    <a href="/">See all</a>
                </div>
            </ul>
        </div>
    );
};

export default Right;