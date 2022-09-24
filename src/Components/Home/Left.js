import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsChatRightTextFill } from 'react-icons/bs';

const Left = () => {
    return (
        <div className='left-side-part drop-shadow-2xl'>
            <ul class="menu w-56 mt-2 rounded-xl font-semibold text-[#5b5b5b]">
                <li className=''>
                    <a href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-[21px] w-[21px] text-[#363636]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        HOME
                    </a>
                </li>
                <li className=''>
                    <a href='/'>
                        <CgProfile className='text-[20px] text-[#363636]' />
                        PROFILE
                    </a>
                </li>
                <li className=''>
                    <a href='/'>
                        <BsChatRightTextFill className='text-[17px] text-[#363636] ' />
                        CHAT
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Left;