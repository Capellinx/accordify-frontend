import {Outlet} from 'react-router-dom';
import {Providers} from './providers';

export function App() {
  return (
    <Providers>
      <Outlet/>
    </Providers>
  );
}

