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
                loader: async () => {
                    const res = await fetch('/data.json');
                    return res.json();
                },
                Component: Home,
            },
            {
                path: "apps",
                loader: async () => {
                    const res = await fetch('/data.json');
                    return res.json();
                },
                Component: AllApps
            },
            {
                path: 'apps/:appid',
                loader: async () => {
                    const res = await fetch('/data.json');
                    return res.json();
                },
                Component: SingleApps,
            }
        ],
    },
]);