import React from 'react';
import './Home.css'
import Center from './Center';
import Left from './Left';
import Right from './Right';
import Navbar from '../Reuseabale-components/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='Home-main-div'>
                <Left></Left>
                <Center></Center>
                <Right></Right>
            </div>
        </div>
    );
};

export default Home;