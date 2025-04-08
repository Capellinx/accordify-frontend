import {Outlet} from 'react-router-dom';
import {Providers} from './providers';

export function Root() {
  return (
    <Providers>
      <Outlet/>
    </Providers>
  );
}

