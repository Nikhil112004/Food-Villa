import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";




const AppLayout = () => {
    return (
        <>
        <Headers />
        <Outlet />
        <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
             {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
             {
                path: "/contact",
                element: <Contact />,
            },
               {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
        ],
    },
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);