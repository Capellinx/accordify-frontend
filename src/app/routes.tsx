import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Root } from './root';
import { Login } from '@/pages/backoffice/login';
import { AuthLayout } from '@/layouts/auth-layout';
import { Paths } from '@/shared/paths';
import { Dashboard } from '@/pages/backoffice/dashboard';
import { AuthBackofficeProtected } from './auth-protected/auth-backoffice-protected';


const routes: RouteObject[] = [{
    path: '/',
    element: <Root />,
    children: [{
        children: [
            {
                element: <AuthLayout />,
                children: [
                    { path: Paths.backoffice.login, Component: Login },
                ]
            },
            {children: [{
                element: <AuthBackofficeProtected/>,
                children: [
                    { path: Paths.backoffice.dashboard, Component: Dashboard }
                ]
            }]},
        ],
    }],
}];


export const router = createBrowserRouter(routes);