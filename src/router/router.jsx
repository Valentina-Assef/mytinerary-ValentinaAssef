import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main"
import Home from "../pages/Home"
import Cities from "../pages/Cities"
import Details from "../pages/Details"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cities",
                element: <Cities />
            },
            {
                path: "/cities/:_id",
                element: <Details />
            }
        ]
    },
]);

export default router;