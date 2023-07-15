import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import Featured from "../pages/Featured/Featured";
import ComingSoonPage from "../components/ComingSoonPage/ComingSoonPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Layout outlet={<ErrorPage />}/>}>
      <Route index element={<Home />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/packages" element={<ComingSoonPage />} />

    </Route>
  )
);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes