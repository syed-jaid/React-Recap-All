import React from 'react';
import AddPost from './AddPost';
import Post from './Post/Post';

const Center = () => {
    return (
        <div className='Home-scroll-part'>
            <div>
                <AddPost />
                <Post></Post>
            </div>
        </div>
    );
};

export default Center;