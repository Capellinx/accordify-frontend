import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFetchAllClients } from "@/hooks/use-fetch-all-clients";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { estadosBrasil } from "@/shared/states";
import { UseFormReturn } from "react-hook-form";
import { NewUserSchema } from "../schema/new-user-schema";

interface NewUserFiledsProps {
   form: UseFormReturn<NewUserSchema>
}

export function NewUserFields({ form }: NewUserFiledsProps) {
   const { listClients } = useFetchAllClients()

   return (
      <>
         <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                     <Input placeholder="" {...field} className="py-5" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                     <Input placeholder="" {...field} className="py-5" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                     <Input placeholder="exemplo@mail.com" {...field} className="py-5" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                     <Input placeholder="okeucm.23" {...field} className="py-5" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <div className="col-span-2">
            <FormField
               control={form.control}
               name="client"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Cliente</FormLabel>
                     <FormControl>
                        <Select onValueChange={field.onChange}>
                           <SelectTrigger className="w-full col-span-3">
                              <SelectValue placeholder="Cliente" />
                           </SelectTrigger>
                           <SelectContent>
                              {listClients && listClients?.clients.map((client) => (
                                 <SelectItem
                                    value={client.id}
                                    key={client.id}
                                    className="cursor-pointer">{client.socialReason}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
         </div>
         <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                     <Input placeholder="" {...field} className="py-5 col-span-1" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                     <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                           <SelectValue placeholder="Cliente" />
                        </SelectTrigger>
                        <SelectContent>
                           {estadosBrasil?.map((client) => (
                              <SelectItem
                                 value={client.sigla}
                                 key={client.sigla}

                                 className="cursor-pointer">{client.sigla}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
      </>
   )
}