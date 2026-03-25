import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../root/Root';
import Hero from '../hero/Hero';
import Home from '../../page/home/Home';
import AllApps from '../../page/allapps/AllApps';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('data.json'),
                path: "/",
                Component: Home,
            },
            {
                index: true,
                loader: () => fetch('data.json'),
                path: "apps",
                Component: AllApps
            }
        ],
    },
]);
