import { ThemeProvider } from "@/pages/backoffice/dashboard/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";


export function BackOfficeLayout() {
   return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <SidebarProvider>
            <Outlet />
         </SidebarProvider>
      </ThemeProvider>
   )
}