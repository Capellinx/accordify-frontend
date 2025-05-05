import { endpoints } from "@/api/endpoints"
import { HttpClient } from "@/api/httpClient"

export type NewUserRequest = {
   name: string,
   surname: string
   email: string,
   password: string
   clientId: string,
   permission: string,
   position: string,
   state: string
   active: boolean
   accessToken: string
}

export type NewUserResponse = void

export type NewUserAction = {
   create: (body: NewUserRequest) => void
}

export class NewUserGetaway implements NewUserAction {
   constructor(
      private readonly httpClient: HttpClient
   ) {}

   async create(body: NewUserRequest): Promise<void> {
      await this.httpClient.request({
         method: "post",
         url: endpoints.backoffice.user,
         body
      })

      return 
   }
}