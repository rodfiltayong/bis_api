import React from "react";
import {
    Outlet,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import Login from "./views/pages/Login";
import Navbar from "./layout/mainComponent/Navbar";
import Sidebar from "./layout/mainComponent/Sidebar";
import DashboardView from "./views/pages/DashboardView";
import DocumentsView from "./views/pages/DocumentsView";
import Main from "./views/pages/Main";
import InitialView from "./views/pages/InitialView";
/* import { TaskProvider } from "./context/TaskContext"; */

const App = () => {
    const Layout = () => {
        return (
            <>
                <div className="bg-green-50 overflow-hidden relative">
                    <Navbar />
                    <div className="flex">
                        <Sidebar />
                        <div className="container px-5 overflow-auto mt-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        );
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/initial",
            element: <InitialView />,
        },
        {
            path: "/",
            element: <Layout />,
            children: [
               
                {
                    path: "/dashboard",
                    element: <DashboardView />,
                },
                {
                    path: "/documents",
                    element: <DocumentsView />,
                },
            ],
        },
       
    ]);
    return <RouterProvider router={router} />;
};

export default App;
