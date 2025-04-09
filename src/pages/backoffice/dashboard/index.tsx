import * as React from "react"
import {
   Frame,
   Map,
   PieChart,
} from "lucide-react"

import { NavProjects } from "@/pages/backoffice/dashboard/components/nav-projects"
import { NavUser } from "@/pages/backoffice/dashboard/components/nav-user"
import { TeamSwitcher } from "@/pages/backoffice/dashboard/components/team-switcher"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail,
} from "@/components/ui/sidebar"

const data = {
   user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
   },
   projects: [
      {
         name: "Clientes",
         url: "#",
         icon: Frame,
      },
      {
         name: "Times",
         url: "#",
         icon: PieChart,
      },
      {
         name: "Usuários",
         url: "#",
         icon: Map,
      },
      {
         name: "Assinaturas",
         url: "#",
         icon: Map,
      },
   ],
}

export function Dashboard({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
