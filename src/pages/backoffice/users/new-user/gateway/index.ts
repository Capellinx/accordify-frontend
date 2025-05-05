import { httClientFactory } from "@/api/httpClient";
import { NewUserGetaway } from "./new-user-getaway";


export const newUserGetaway = new NewUserGetaway(httClientFactory())