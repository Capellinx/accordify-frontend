import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthBackOfficeProvider } from '@/context/auth-backoffice-context';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
        <AuthBackOfficeProvider>
            <main>
              {children}
            </main>
        </AuthBackOfficeProvider>
    </QueryClientProvider>
  );
}