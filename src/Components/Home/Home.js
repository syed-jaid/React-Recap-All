import React from 'react';
import './Home.css'
import Center from './Center';
import Left from './Left';
import Right from './Right';

const Home = () => {
    return (
        <div className='Home-main-div'>
            <Left></Left>
            <Center></Center>
            <Right></Right>
        </div>
    );
};

export default Home;