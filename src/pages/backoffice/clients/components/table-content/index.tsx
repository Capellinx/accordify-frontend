import { useFetchAllClients } from "../../hooks/use-fetch-all-clients"
import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Client } from "../create-client-modal/schemas/client.schema";

export function TableContent() {
      const { listClients, isLoading } = useFetchAllClients()
   
   return (
      <>
         {isLoading ? (
            [...Array(5)].map((_, index) => (
               <TableRow key={index} className="animate-pulse">
                  <TableCell className="px-6 py-4">
                     <Skeleton className="h-4 w-3/4 rounded-md" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                     <Skeleton className="h-4 w-1/2 rounded-md" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                     <Skeleton className="h-4 w-2/3 rounded-md" />
                  </TableCell>
               </TableRow>
            ))
         ) : listClients && listClients.clients.length > 0 ? (
            listClients.clients.map((client: Client, index: number) => (
               <TableRow
                  key={client.cnpj}
                  className={
                     index % 2 === 0
                        ? "bg-white hover:bg-zinc-100"
                        : "bg-zinc-50 hover:bg-zinc-100"
                  }
               >
                  <TableCell className="px-6 py-4 font-medium text-zinc-900">
                     {client.socialReason}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-zinc-700">
                     {client.cnpj}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-zinc-700">
                     {client.email}
                  </TableCell>
               </TableRow>
            ))
         ) : (
            <TableRow>
               <TableCell
                  colSpan={3}
                  className="text-center px-6 py-10 text-zinc-500 italic bg-zinc-50"
               >
                  Sem dados para mostrar.
               </TableCell>
            </TableRow>
         )}
      </>
   )
}