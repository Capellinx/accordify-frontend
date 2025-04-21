import { endpoints } from "@/api/endpoints"
import { HttpClient, HttpClientResponse } from "@/api/httpClient"

export type CreateClientRequest = {
   socialReason: string,
   cnpj: string,
   email: string,
   managerId: string
   accessToken: string
}

export type CreateClientResponse = {
   id: string
   socialReason: string
   email: string,
   cnpj: string,
   createdAt: string
   updatedAt: string
}

export type CreateClientAction = {
   create: (payload: CreateClientRequest) => Promise<HttpClientResponse<CreateClientResponse>>
}

export class CreateClientGetaway implements CreateClientAction {
   constructor(
      private readonly httpClient: HttpClient
   ) {}

   async create({accessToken, ...payload}: CreateClientRequest)
   : Promise<HttpClientResponse<CreateClientResponse>> {
      return await this.httpClient.request({
         method: "post",
         url: endpoints.backoffice.create,
         body: payload,
         headers: {
            Authorization: `Bearer ${accessToken}`
         }
      })
   }
}
