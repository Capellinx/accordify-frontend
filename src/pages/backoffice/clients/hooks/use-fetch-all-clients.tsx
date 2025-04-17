import { LOCALSTORAGE } from "@/shared/local-storage-keys"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useFetchAllClients() {
   const access_token = localStorage.getItem(LOCALSTORAGE.BACKOFFICE.LOGIN)
   const key = 'fetch-all-clients'
   
   const { data, isLoading } = useQuery({
      queryKey: [key],
      queryFn: async () => {
         const { data } = await axios.get('http://localhost:3333/backoffice/clients', {
            headers: {
               Authorization: `Bearer ${access_token}`
            }
         })
         return data
      }
   })

   return {
      listClients: data,
      isLoading
   }
}