import { CreateClientModal } from "@/pages/backoffice/clients/modals/create-client-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useModal } from "@/hooks/use-modal";
import { Plus, Search } from "lucide-react";


export function Clients() {
   const { open } = useModal()

   return (
      <section className="w-full">
         <div className="w-full max-w-6xl">

            <header className="flex items-center justify-between">
               <div>
                  <h1 className="text-2xl font-bold">Clientes</h1>
                  <p className="mt-4 flex items-center gap-4 font-medium">
                     Clientes
                     <div className="inline-block h-1 w-1 rounded-full bg-gray-500/80"></div>
                     <span className="text-gray-500">Listagem</span>
                  </p>
               </div>
               <Button className="flex items-center gap-2 cursor-pointer bg-[#2A86F5] hover:bg-[#0961DC]" onClick={open}>
                  <Plus />
                  Adicionar novo cliente
               </Button>
            </header>

            <div className="mt-10">
               <Card className="shadow-md rounded-sm">
                  <CardHeader className="flex">
                     <div className="relative flex-1">
                        <Input type="text" className="w-full pl-10" placeholder="Buscar por razão ou cnpj" />
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                     </div>
                     <Button className="border border-[#2A86F5] bg-transparent text-[#2A86F5] cursor-pointer hover:bg-[#2A86F5] hover:text-white transition-colors duration-300 ease-in-out">
                        Buscar
                     </Button>
                  </CardHeader>
                  <Separator />

                  <CardContent>
                     <Table>
                        <TableHeader>
                           <TableRow className="bg-[#F4F6F8]">
                              <TableHead>Nome</TableHead>
                              <TableHead>CNPJ</TableHead>
                              <TableHead>Status</TableHead>
                           </TableRow>
                        </TableHeader>
                        <div className="mt-5"></div>
                        <TableBody >
                           <TableRow className="mt-4">
                              <TableCell
                                 colSpan={3}
                                 className="text-center  p-10 hover:none bg-[#FBFBFC] text-zinc-900 text-md font-medium"
                              >
                                 Sem dados para mostrar.
                              </TableCell>
                           </TableRow>
                        </TableBody>
                     </Table>
                  </CardContent>
               </Card>
            </div>
         </div>
         <CreateClientModal />
      </section>
   )
}