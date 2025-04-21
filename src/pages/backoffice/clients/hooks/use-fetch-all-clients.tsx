import { useDecodeToken } from "@/hooks/use-decode-token"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useFetchAllClients() {
   const { id, access_token } = useDecodeToken()
   const key = 'fetch-all-clients'

   const { data, isLoading } = useQuery({
      queryKey: [key],
      queryFn: async () => {
         const { data } = await axios.get(`http://localhost:3333/backoffice/clients?id=${id}`, {
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