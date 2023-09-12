import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main"
import Home from "../pages/Home"
import Cities from "../pages/Cities"
import Details from "../pages/Details"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import ErrorPage from "../pages/ErrorPage";
import { ProtectedRoute } from "./ProtectedRoute";

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
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/signin",
                element: (<ProtectedRoute path="/">
                            <SignIn />
                        </ProtectedRoute>)
            },
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "/errorpage",
                element: <ErrorPage />
            }
        ]
    },
]);

export default router;