import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from './root';
import { Login } from '@/pages/backoffice/login';
import { AuthLayout } from '@/layouts/auth-layout';
import { Paths } from '@/shared/paths';


const routes: RouteObject[] = [{
    path: '/',
    element: <App />,
    children: [
        { children: [{
            element: <AuthLayout />,
            children: [
                { path: Paths.backoffice.login, Component: Login }
            ]
        }]}
    ],
}];


export const router = createBrowserRouter(routes);