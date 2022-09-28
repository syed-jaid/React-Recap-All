import React from 'react';
import { RiLiveFill } from 'react-icons/ri';
import { MdPhotoLibrary } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';

const AddPost = () => {
    return (
        <div className='Add-post-main-div mt-2'>
            <div>
                <div className='Add-post-div'>
                    <div className="avatar online ">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div className='post-button ml-2'>
                        <p>What is in your mind,Man?</p>
                    </div>
                </div>
                <hr />
                <div className='mt-2 p-2 flex items-center justify-around'>
                    <div className='add-another'>
                        <RiLiveFill className='adding-icon' />
                        <small>Live video</small>
                    </div>
                    <div className='add-another'>
                        <MdPhotoLibrary className='adding-icon' />
                        <small>Photo/video</small>
                    </div>
                    <div className='add-another'>
                        <BsEmojiSmile className='adding-icon' />
                        <small>Feeling</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;