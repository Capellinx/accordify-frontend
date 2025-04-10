import * as React from "react"
import { NavProjects } from "@/components/sidebar/components/nav-projects"
import { NavUser } from "@/components/sidebar/components/nav-user"
import { TeamSwitcher } from "@/components/sidebar/components/team-switcher"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail,
} from "@/components/ui/sidebar"
import { data } from "./constants"

export function SidebarLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible="icon" {...props}>
         <SidebarHeader>
            <TeamSwitcher />
         </SidebarHeader>
         <SidebarContent>
            <NavProjects projects={data.projects} />
         </SidebarContent>
         <SidebarFooter>
            <NavUser user={data.user} />
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   )
}
