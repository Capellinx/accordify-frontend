import { httClientFactory } from "@/api/httpClient";
import { FecthAllClientsGetaway } from "./fetch-all-clients-getaway";
import { CreateClientGetaway } from "./create-client-getaway";

export const fetchAllClientsGetaway = new FecthAllClientsGetaway(httClientFactory())
export const createClientGetaway = new CreateClientGetaway(httClientFactory())