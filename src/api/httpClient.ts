import axios, { AxiosError, AxiosResponse } from "axios"

export interface HttpRequest {
   url: string
   method: "get" | "post" | "delete" | "put" | "patch"
   body?: any
   headers?: any
}

export interface HttpClientResponse<R = any> {
   statusCode: number
   body: R
}

export interface HttpClient<R = any> {
   request: (data: HttpRequest) => Promise<HttpClientResponse<R>>
}

class AxiosHttpClientAdapter implements HttpClient {
   async request(data: HttpRequest) {
      let axiosResponse: AxiosResponse

      try {
         axiosResponse = await axios.request({
            url: data.url,
            method: data.method,
            data: data.body,
            headers: data.headers
         });
      } catch (error) {
         const _error = error as AxiosError<{ message: string }>
         throw new Error(_error?.response?.data?.message)
      }

      return {
         statusCode: axiosResponse.status,
         body: axiosResponse.data
      }
   }
}

export const httClientFactory = (): HttpClient => new AxiosHttpClientAdapter() 