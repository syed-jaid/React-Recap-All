import React from 'react';
import { FaUserFriends } from 'react-icons/fa';

const Right = () => {
    return (
        <div className='Right-side-part'>
            <ul class="menu bg-base-100 w-56 mt-2 border-[3px] border-[#cbd5e1] rounded-xl">
                <li className='w-full '>
                    <a className='mx-auto font-semibold' href='/'><FaUserFriends /> Friend List</a>
                </li>
                <li className='border-t-[2px] border-base-400 '>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <li className='border-t-[2px] border-base-400 '>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <li className='border-t-[2px] border-base-400 '>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <li className='border-t-[2px] border-base-400 '>
                    <div className="avatar placeholder d-flex items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">SJ</span>
                        </div>
                        <a href="/" className='mb-1 ml-2'>Syed Jaid</a>
                    </div>
                </li>
                <div className='border-t-[2px] border-base-400 friend-bottom-part  font-semibold'>
                    <a href="/">Add +</a>

                    <a href="/">Details</a>
                </div>
            </ul>
        </div>
    );
};

export default Right;