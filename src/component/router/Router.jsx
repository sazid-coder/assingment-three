import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../root/Root';
import Home from '../../page/home/Home';
import AllApps from '../../page/allapps/AllApps';
import SingleApps from '../../page/allapps/SingleApps';
import SavedApps from '../../page/allapps/SavedApps';
import PageNotFound from '../../page/error/PageNotFound';
import AppnotFound from '../../page/error/AppnotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <PageNotFound></PageNotFound>,
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
                Component: AllApps,
            },
            {
                path: "installed",
                loader: async () => {
                    const res = await fetch('/data.json');
                    return res.json();
                },
                Component: SavedApps,
            },
            {
                path: 'apps/:appid',
                loader: async () => {
                    const res = await fetch('/data.json');
                    return res.json();
                },
                Component: SingleApps,
                errorElement: <AppnotFound></AppnotFound>,
            }
        ],
    },
]);