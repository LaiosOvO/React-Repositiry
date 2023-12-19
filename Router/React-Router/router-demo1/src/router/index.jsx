import {
    createBrowserRouter,
} from "react-router-dom";


import Index from "../pages/Index"
import Root , {loader as rootLoader,action as rootAction,} from '../pages/root/Root'
import ErrorPage from "../pages/404/ErrorPage.jsx";
import Contact, {  loader as contactLoader,  action as contactAction } from "../components/contact/Contact.jsx";
import EditContact , {
    action as editAction,
} from "../components/contact/edit/Edit.jsx";
import  {
    action as destroyAction,
} from "../components/contact/destroy/Destroy.jsx";
const rule = [
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage></ErrorPage>,
                children: [

                    {
                        index: true,
                        element: <Index></Index>,
                    },
                    {
                        path: '/contacts/:contactId',
                        element: <Contact></Contact>,
                        loader: contactLoader,
                        action: contactAction
                    },
                    {
                        path: '/contacts/:contactId/edit',
                        element: <EditContact></EditContact>,
                        loader: contactLoader,
                        action: editAction
                    },
                    {
                        path: '/contacts/:contactId/destroy',
                        action: destroyAction,
                        errorElement: <div>Oops! There was an error.</div>,
                    },
                ]
            }
        ]
    },
    // {
    //     path: '/contacts/:contactId',
    //     element: <Contact></Contact>,
    // },


]

const router = createBrowserRouter(rule);

export default router;

