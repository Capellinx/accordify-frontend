import {ReactNode} from 'react';


export function Providers({children}: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}