import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;