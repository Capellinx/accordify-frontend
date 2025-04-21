import { endpoints } from "@/api/endpoints"
import { HttpClient, HttpClientResponse } from "@/api/httpClient"

export type LoginRequest = {
   email: string
   password: string
}

export type LoginResponse = {
   manager: {
      name: string
   },
   access_token: string
}

export type LoginAction = {
   login: (body: LoginRequest) => Promise<HttpClientResponse<LoginResponse>>
}

export class LoginManagerGetaway implements LoginAction {
   constructor(
      private readonly httpClient: HttpClient
   ) { }

   async login(body: LoginRequest): Promise<HttpClientResponse<LoginResponse>> {
      return await this.httpClient.request({
         method: "post",
         url: endpoints.backoffice.login,
         body
      });
   }
}
