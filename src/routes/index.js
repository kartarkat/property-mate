import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Pages from '../pages'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pages />,
        errorElement: <ErrorPage />
    },
]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes