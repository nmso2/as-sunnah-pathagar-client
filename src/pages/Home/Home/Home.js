import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h2 className="text-3xl">Home</h2>
            <Link to='books'>Books</Link>
        </div>
    );
};

export default Home;