import React from 'react';
import heroImg from '../../assets/hero.png';
import appsimage from '../../assets/apps.png';

const Hero = () => {
    return (
        <div className='flex flex-col items-center bg-white text-black pt-20'>
            <h1 className='text-7xl font-bold'>We Build Productive Apps</h1>
            <p className='text-center py-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <img className='pb-10' src={appsimage} alt="" />
            <img src={heroImg} alt="Hello world" />
        </div>
    );
};

export default Hero;