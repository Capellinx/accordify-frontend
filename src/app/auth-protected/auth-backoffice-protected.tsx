import { useAuthBackOffice } from "@/hooks/useAuthBackoffice"
import { Paths } from "@/shared/paths"
import { Navigate, Outlet } from "react-router-dom"


export function AuthBackofficeProtected() {
   const { manager } = useAuthBackOffice()

   if(!manager){
      return Navigate({
         to: Paths.backoffice.login,
         replace: true
      })
   }
   
   return <Outlet/>  
}