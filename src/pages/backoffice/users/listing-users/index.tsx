import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search } from "lucide-react";
import { Paths } from "@/shared/paths";
import {
   Select,  
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { useFetchAllClients } from "@/hooks/use-fetch-all-clients";
import { Breadcrumb } from "@/components/breadcrumb";
import { useNavigate } from "react-router-dom";


export function Users() {
   const { listClients } = useFetchAllClients()
   const navigate = useNavigate()
   
   return (
      <section className="w-full">
         <div className="w-full max-w-7xl">
            <header className="flex items-center justify-between">
               <Breadcrumb>
                  <Breadcrumb.Title>Usuários</Breadcrumb.Title>
                  <Breadcrumb.List>
                     <Breadcrumb.Item href={Paths.backoffice.users.list}>Usuários</Breadcrumb.Item>
                     <Breadcrumb.Separator />
                     <Breadcrumb.Item>Listagem</Breadcrumb.Item>
                  </Breadcrumb.List>
               </Breadcrumb>
               <div className="flex items-center gap-2">
                  <Button className="flex items-center gap-2 cursor-pointer bg-[#2A86F5] hover:bg-[#0961DC]" >
                     <Plus />
                     Adicionar múltiplos usuários
                  </Button>
                  <Button className="flex items-center gap-2 cursor-pointer bg-[#2A86F5] hover:bg-[#0961DC]" onClick={() => navigate(Paths.backoffice.users.new)} >
                     <Plus />
                     Adicionar usuário
                  </Button>
               </div>
            </header>

            <div className="mt-10">
               <Card>
                  <CardHeader className="flex">
                     <div className="relative flex-1">
                        <Input
                           type="text"
                           className="w-full pl-10"
                           placeholder="Buscar por nome ou email"
                        />
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                     </div>
                     <Select>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="Ativo">Ativo</SelectItem>
                           <SelectItem value="Inativo">Inativo</SelectItem>
                        </SelectContent>
                     </Select>
                     <Select>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Cliente" />
                        </SelectTrigger>
                        <SelectContent>
                           {listClients && listClients?.clients.map((client) => (
                              <SelectItem
                                 value={client.id}
                                 className="cursor-pointer">{client.socialReason}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                     <Button className="border border-[#2A86F5] bg-transparent text-[#2A86F5] cursor-pointer hover:bg-[#2A86F5] hover:text-white transition-colors duration-300 ease-in-out">
                        Buscar
                     </Button>
                  </CardHeader>
                  <Separator />
                  <CardContent>
                     <div className="overflow-x-auto rounded-sm shadow-md border border-zinc-200">
                        <Table className="min-w-full text-sm text-zinc-700">
                           <TableHeader>
                              <TableRow className="bg-[#F4F6F8] text-zinc-600 uppercase text-xs tracking-wider">
                                 <TableHead className="px-6 py-4 text-left">Nome</TableHead>
                                 <TableHead className="px-6 py-4 text-left">Email</TableHead>
                                 <TableHead className="px-6 py-4 text-left">Status</TableHead>
                                 <TableHead className="px-6 py-4 text-left">Cliente</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                           {/* Adicionar corpo da tabela */}
                           </TableBody>
                        </Table>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>
   )
}