import { httClientFactory } from "@/api/httpClient";
import { ResetPasswordGetaway } from "./reset-password-getaway";

export const resetPasswordGetaway = new ResetPasswordGetaway(httClientFactory())