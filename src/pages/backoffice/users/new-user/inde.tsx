import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Paths } from "@/shared/paths";
import { NewUserFields } from "./components/new-user-fields";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useCreateUserForm } from "./hooks/use-create-new-user";

export function NewUser() {
   const { form, onSubmit} = useCreateUserForm()

   return (
      <section className="w-full">
         <div className="w-full max-w-7xl mx-auto">
            <header className="flex items-center justify-between">
               <Breadcrumb>
                  <Breadcrumb.Title>Usuários</Breadcrumb.Title>
                  <Breadcrumb.List>
                     <Breadcrumb.Item href={Paths.backoffice.users.list}>Usuários</Breadcrumb.Item>
                     <Breadcrumb.Separator />
                     <Breadcrumb.Item>Novo usuário</Breadcrumb.Item>
                  </Breadcrumb.List>
               </Breadcrumb>
            </header>
            <div className="mt-10">
               <Form {...form}>
                  <form onSubmit={form.handleSubmit((v) => onSubmit(v))}>
                     <Card>
                        <CardContent className="grid grid-cols-2 gap-4">
                           <NewUserFields form={form} />
                        </CardContent>
                     </Card>
                     <footer className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                           <FormField
                              control={form.control}
                              name="active"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormControl>
                                       <Switch
                                          checked={field.value}
                                          onCheckedChange={field.onChange}
                                          className="cursor-pointer"
                                       />
                                    </FormControl>
                                 </FormItem>
                              )}
                           />
                           <p>Ativo</p>
                        </div>
                        <Button
                           className="bg-[#2C7FFF] cursor-pointer hover:bg-[#1F5AC7]"
                           aria-label="Criar usuário"
                        >
                           Criar usuário
                        </Button>
                     </footer>
                  </form>
               </Form>
            </div>
         </div>
      </section>
   )
}