
import { LOCALSTORAGE } from '@/shared/local-storage-keys';
import { createContext, ReactNode, useState } from 'react';

interface Manager {
   name: string
   access_token: string
}

interface AuthBackofficeContextProps {
   manager: Manager | null
   setInformationOnLocalStorage: (data: Manager) => void
}

export const AuthBackofficeContext = createContext({} as AuthBackofficeContextProps);

export function AuthBackOfficeProvider({ children }: { children: ReactNode }) {
   const [manager, setManager] = useState<Manager | null>(null)

   function setInformationOnLocalStorage({ name, access_token }: Manager) {
      setManager({
         name,
         access_token
      })
      
      localStorage.setItem(LOCALSTORAGE.BACKOFFICE.LOGIN, access_token)
   }

   return (
      <AuthBackofficeContext.Provider value={{
         manager,
         setInformationOnLocalStorage
      }}>
         {children}
      </AuthBackofficeContext.Provider>
   );
}
