import { Paths } from "@/shared/paths";
import { Frame, PieChart, Map } from "lucide-react";

export const SIDEBAR_CONTROL = {
   user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
   },
   projects: [
      {
         name: "Clientes",
         url: Paths.backoffice.clients,
         icon: Frame,
      },
      {
         name: "Times",
         url: "#",
         icon: PieChart,
      },
      {
         name: "Usuários",
         url: Paths.backoffice.users,
         icon: Map,
      },
      {
         name: "Assinaturas",
         url: "#",
         icon: Map,
      },
   ],
}
