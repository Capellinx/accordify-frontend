import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Root } from './root';
import { Login } from '@/pages/backoffice/login';
import { AuthLayout } from '@/layouts/auth-layout';
import { Paths } from '@/shared/paths';
import { AuthBackofficeProtected } from './auth-protected/auth-backoffice-protected';
import { BackOfficeLayout } from '@/layouts/backoffice-layout';
import { ResetPassword } from '@/pages/backoffice/reset-password';
import { Clients } from '@/pages/backoffice/clients';
import { Users } from '@/pages/backoffice/users/listing-users';
import { NewUser } from '@/pages/backoffice/users/new-user/inde';

const routes: RouteObject[] = [{
    path: '/',
    element: <Root />,
    children: [{
        children: [
            {
                element: <AuthLayout />,
                children: [
                    { path: Paths.backoffice.login, Component: Login },
                    { path: Paths.backoffice.resetPassword, Component: ResetPassword },
                ]
            },
            {
                children: [{
                    element: <AuthBackofficeProtected />,
                    children: [{
                        element: <BackOfficeLayout />,
                        children: [
                            { path: Paths.backoffice.clients, Component: Clients },
                            { path: Paths.backoffice.users.list, Component: Users },
                            { path: Paths.backoffice.users.new, Component: NewUser }
                        ]
                    }]
                }]
            },
        ],
    }],
}];


export const router = createBrowserRouter(routes);