import { SidebarLayout } from "@/components/sidebar";
import { ThemeProvider } from "@/components/sidebar/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";


export function BackOfficeLayout() {
   return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
         <SidebarProvider>
            <div className="flex gap-10 p-20">
               <SidebarLayout />
               <Outlet />
            </div>
         </SidebarProvider>
      </ThemeProvider>
   )
}