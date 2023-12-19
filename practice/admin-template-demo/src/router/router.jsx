import {
    createBrowserRouter,
} from "react-router-dom";

import Main from '../views/layout/index'

const rule = [

    {
        path: '/',
        element: <Main />
    }


]



const router = createBrowserRouter( rule )

export default router;