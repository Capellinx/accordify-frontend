
import { LOCALSTORAGE } from '@/shared/local-storage-keys';
import { Paths } from '@/shared/paths';
import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Manager {
   name: string
   access_token: string
}

interface AuthBackofficeContextProps {
   manager: Manager | null
   setInformationOnLocalStorage: (data: Manager) => void
   logout: () => void
}

export const AuthBackofficeContext = createContext({} as AuthBackofficeContextProps);

export function AuthBackOfficeProvider({ children }: { children: ReactNode }) {
   const [manager, setManager] = useState<Manager | null>(null)

   const navigate = useNavigate()

   function setInformationOnLocalStorage({ name, access_token }: Manager) {
      setManager({
         name,
         access_token
      })

      localStorage.setItem(LOCALSTORAGE.BACKOFFICE.LOGIN, access_token)
   }

   function logout() {
      localStorage.removeItem(LOCALSTORAGE.BACKOFFICE.LOGIN)
      navigate(Paths.backoffice.login)
   }

   return (
      <AuthBackofficeContext.Provider value={{
         manager,
         logout,
         setInformationOnLocalStorage,
      }}>
         {children}
      </AuthBackofficeContext.Provider>
   );
}
