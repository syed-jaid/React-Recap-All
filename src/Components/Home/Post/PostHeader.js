import React from 'react';

const PostHeader = () => {
    return (
        <div className="postHeader">
            <div className='postInfo'>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className='mb-1 ml-2 text-white'>
                    <small className='font-semibold text-[15px]'>User Name</small>
                    <small className='block'>13:00pm</small>
                </div>
            </div>
            <p className='text-[14px] text-white'>
                !!! বাসি খাওয়ার দিন শেষ - সতেজে বাংলাদেশ !!!
                “ঢাকাই সুইটস্ এন্ড দই ঘর”- হাজির হলো তাদের স্পেসাল মিষ্টান্ন আইটেম নিয়ে। যেহেতু আমাদের প্রতিষ্ঠান ঢাকায় অবস্থিত সেহেতু আমাদের নিকট পাচ্ছেন প্রতিনিয়ত টাটকা, নির্ভেজাল এবং সুস্বাদু মিষ্টির নিশ্চয়তা।
                আমাদের সকল । … See more
            </p>
        </div>
    );
};

export default PostHeader;