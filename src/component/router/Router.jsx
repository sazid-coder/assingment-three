import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../root/Root';
import Home from '../../page/home/Home';
import AllApps from '../../page/allapps/AllApps';
import SingleApps from '../../page/allapps/SingleApps';

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
                loader: () => fetch('data.json'),
                path: "apps",
                Component: AllApps
            },
            {
                path: 'apps/:appid',
                loader: () => fetch('data.json'),
                Component: SingleApps,
            }
        ],
    },
]);
