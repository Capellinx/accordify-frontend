import { LOCALSTORAGE } from "@/shared/local-storage-keys"
import { Paths } from "@/shared/paths"
import { Navigate, Outlet } from "react-router-dom"


export function AuthBackofficeProtected() {
   const access_token = localStorage.getItem(LOCALSTORAGE.BACKOFFICE.LOGIN)

   if (!access_token){
      return Navigate({
         to: Paths.backoffice.login,
         replace: true
      })
   }
   
   return <Outlet/>  
}