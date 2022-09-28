import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

const Post = () => {
    return (
        <div>
            <PostHeader></PostHeader>
            {/* <img className='w-full' src="https://i.ibb.co/0QzDhCV/Reji.png" alt="" /> */}
            <img src="https://i.ibb.co/T4ZHy7B/favicon.png" alt="" />
            <PostFooter></PostFooter>

        </div>
    );
};

export default Post;