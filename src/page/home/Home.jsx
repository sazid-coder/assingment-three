import React from 'react';
import Hero from '../../component/hero/Hero';
import Trust from '../../component/trust/Trust';
import Data from '../../component/data/Data';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Trust></Trust>
            <Data data={data}></Data>
        </div>
    );
};

export default Home;