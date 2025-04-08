import { AuthBackofficeContext } from "@/context/auth-backoffice-context";
import { useContext } from "react";

export const useAuthBackOffice = () => useContext(AuthBackofficeContext)