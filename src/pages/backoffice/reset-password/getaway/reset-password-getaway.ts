import { endpoints } from "@/api/endpoints"
import { HttpClient, HttpClientResponse } from "@/api/httpClient"

export type ResetPasswordRequest = {
   email: string
}

export type ResetPasswordResponse = {
   message: string
}

export type ResetPasswordAction = {
   reset: (email: ResetPasswordRequest) => Promise<HttpClientResponse<ResetPasswordResponse>>
}

export class ResetPasswordGetaway implements ResetPasswordAction {

   constructor(
      private readonly httpClient: HttpClient
   ) {}

   async reset(email: ResetPasswordRequest): Promise<HttpClientResponse<ResetPasswordResponse>>{
      const { body } = await this.httpClient.request({
         method: "post",
         url: endpoints.backoffice.resetPassword,
         body: email
      })

      return body
   }
}

