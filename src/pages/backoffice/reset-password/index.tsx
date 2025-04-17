import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Paths } from "@/shared/paths"
import { useNavigate } from "react-router-dom"
import { useForgotPasswordForm } from "./hooks/use-forgot-passowrd-form"
import ClipLoader from "react-spinners/ClipLoader"


export function ResetPassword() {
   const { form, onSubmit, isPending } = useForgotPasswordForm()

   const navigate = useNavigate()

   return (
      <Card className="h-90 bg-white text-black shadow-lg w-md">
         <CardHeader className="text-center">
            <CardTitle className="text-xl">Problemas com sua senha?</CardTitle>
            <CardDescription>
               Insiria seu e-mail institucional para recuperar sua senha
            </CardDescription>
         </CardHeader>
         <CardContent className="">
            <Form {...form}>
               <form onSubmit={form.handleSubmit((v) => onSubmit(v))}>
                  <div className="flex flex-col gap-4">
                     <div>
                        <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>E-mail</FormLabel>
                                 <FormControl>
                                    <Input placeholder="exemplo@email.com" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <Button
                        type="submit"
                        className="w-full bg-[#2C7FFF] cursor-pointer hover:bg-[#1F5AC7] hover:font-bold"
                        disabled={isPending}
                     >
                        {isPending ? (
                           <ClipLoader
                              color="#ffff"
                              loading={isPending}
                              size={20}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                           />
                        ) : (
                           <p className="text-white">Recuperar</p>
                        )}
                     </Button>
                  </div>
               </form>
            </Form>
         </CardContent>
         <CardFooter className="flex justify-center h-full gap-4">
            <p className="text-sm text-muted-foreground">
               Lembrou a senha?
               <span
                  className="text-[#2C7FFF] hover:underline cursor-pointer inline-block ml-1"
                  onClick={() => navigate(Paths.backoffice.login)}
               >
                  Entre aqui
               </span>
            </p>
         </CardFooter>
      </Card>
   )
}