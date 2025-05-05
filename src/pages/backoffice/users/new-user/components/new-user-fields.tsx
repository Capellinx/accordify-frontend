import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFetchAllClients } from "@/hooks/use-fetch-all-clients";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { estadosBrasil } from "@/shared/states";
import { UseFormReturn } from "react-hook-form";
import { NewUserSchema } from "../schema/new-user-schema";
import { positions } from "../data";

interface NewUserFieldsProps {
   form: UseFormReturn<NewUserSchema>
}

export function NewUserFields({ form }: NewUserFieldsProps) {
   const { listClients } = useFetchAllClients();


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
                     <Input
                        {...field}
                        placeholder="okeucm.23"
                        className="py-5"
                     />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="clientId"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Cliente</FormLabel>
                  <FormControl>
                     <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full col-span-3">
                           <SelectValue placeholder="Cliente" />
                        </SelectTrigger>
                        <SelectContent>
                           {listClients?.clients.map((client) => (
                              <SelectItem
                                 value={client.id}
                                 key={client.id}
                                 className="cursor-pointer"
                              >
                                 {client.socialReason}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Permissão</FormLabel>
                  <FormControl>
                     <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full col-span-3">
                           <SelectValue placeholder="Tipo de acesso" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem className="cursor-pointer" value="user">Sales</SelectItem>
                           <SelectItem className="cursor-pointer" value="user">Lawyer</SelectItem>
                           <SelectItem className="cursor-pointer" value="user">Master</SelectItem>
                        </SelectContent>
                     </Select>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                     <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full col-span-3">
                           <SelectValue placeholder="Cargo" />
                        </SelectTrigger>
                        <SelectContent>
                           {positions?.map((position) => (
                              <SelectItem
                                 value={position.name}
                                 key={position.id}
                                 className="cursor-pointer"
                              >
                                 {position.name}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
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
                           <SelectValue placeholder="Estado" />
                        </SelectTrigger>
                        <SelectContent>
                           {estadosBrasil?.map((state) => (
                              <SelectItem
                                 value={state.sigla}
                                 key={state.sigla}
                                 className="cursor-pointer"
                              >
                                 {state.sigla}
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
   );
}
