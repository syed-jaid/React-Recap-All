import React from 'react';
import { BiLike } from 'react-icons/bi';
import { CgComment } from 'react-icons/cg';
import { MdOutlineAddToPhotos } from 'react-icons/md';

const PostFooter = () => {
    return (
        <div className='postFooter'>
            <div className='like-comment-add'>
                <div>
                    <BiLike className='postFooter-icon' />
                    <p className='font-semibold icon-text'>Like</p>
                </div>
                <div>
                    <CgComment className='postFooter-icon' />
                    <p className='font-semibold icon-text'>Comment</p>
                </div>
                <div>
                    <MdOutlineAddToPhotos className='postFooter-icon' />
                    <p className='font-semibold icon-text'>Add+</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default PostFooter;