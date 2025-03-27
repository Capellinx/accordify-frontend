import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {Register} from '@/pages/register';
import {App} from './root';
import {Spa} from '@/pages/spa';
import {Login} from '@/pages/login';


const routes: RouteObject[] = [{
    path: '/',
    element: <App/>,
    children: [
        {index: true, Component: Spa},
        {path: "login", Component: Login},
        {path: "register", Component: Register}
    ],
}];


export const router = createBrowserRouter(routes);