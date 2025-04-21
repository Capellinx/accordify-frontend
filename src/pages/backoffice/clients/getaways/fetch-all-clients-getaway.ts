import { endpoints } from "@/api/endpoints"
import { HttpClient, HttpClientResponse } from "@/api/httpClient"

export type FetchAllClientsRequest = {
   managerId: string
   accessToken: string
}

export type FetchAllClientsResponse = {
   id: string
   socialReason: string
   email: string,
   cnpj: string,
   createdAt: string
   updatedAt: string
}

export type FecthAllClientsAction = {
   getAll: ({ managerId }: 
      FetchAllClientsRequest) => Promise<HttpClientResponse<FetchAllClientsResponse>>
}

export class FecthAllClientsGetaway implements FecthAllClientsAction{
   constructor(
      private readonly httpClient: HttpClient
   ) {}

   async getAll({ managerId, accessToken }: 
      FetchAllClientsRequest): Promise<HttpClientResponse<FetchAllClientsResponse>> {
      return await this.httpClient.request({
         method: "get",
         url: endpoints.backoffice.getAllClientsOfManager(managerId),
         headers: {
            Authorization: `Bearer ${accessToken}`
         }
      })
   }
}