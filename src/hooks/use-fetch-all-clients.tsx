import { useDecodeToken } from "@/hooks/use-decode-token"
import { useQuery } from "@tanstack/react-query"
import { fetchAllClientsGetaway } from "../pages/backoffice/clients/getaways"


export function useFetchAllClients() {
   const { id: managerId, access_token: accessToken } = useDecodeToken()
   const key = 'fetch-all-clients'

   const { data, isLoading } = useQuery({
      queryKey: [key],
      queryFn: async () => {
         const { body } = await fetchAllClientsGetaway.getAll({ 
            managerId,
            accessToken  
         })
         return body
      }
   })

   return {
      listClients: data,
      isLoading
   }
}