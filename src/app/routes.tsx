import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {Register} from '../pages/register';
import {App} from './root';
import {Login} from '../pages/login';


const routes: RouteObject[] = [{
    path: '/',
    element: <App/>,
    children: [
        {index: true, Component: Login},
        {path: "register", Component: Register}
    ],
}];


export const router = createBrowserRouter(routes);