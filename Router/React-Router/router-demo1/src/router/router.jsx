import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../components/home/Home.jsx";
import About from "../components/about/About.jsx";

import Nest from '../pages/nest/Nest.jsx'
import Menu1 from "../pages/nest/menu1";
import Menu2 from "../pages/nest/menu2";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/about',
        element: <About></About>,
    },
    {
        path: '/nest',
        element: <Nest></Nest>
    }


]);

export default router;

