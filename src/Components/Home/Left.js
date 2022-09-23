import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsChatRightDots } from 'react-icons/bs';

const Left = () => {
    return (
        <div>
            <ul class="menu bg-base-100 w-56 mt-2 border-[4px] border-[#cbd5e1] rounded-xl  font-semibold">
                <li className='border-b-[2px] border-base-400'>
                    <a href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-[21px] w-[21px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        HOME
                    </a>
                </li>
                <li className=''>
                    <a href='/'>
                        <CgProfile className='text-[20px]' />
                        PROFILE
                    </a>
                </li>
                <li className='border-t-[2px] border-base-400'>
                    <a href='/'>
                        <BsChatRightDots className='text-[17px]' />
                        CHAT
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Left;