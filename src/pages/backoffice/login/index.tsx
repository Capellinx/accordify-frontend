import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
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
import { useForm } from "react-hook-form"
import { loginSchema, LoginSchema } from "./schema/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useBackofficeLogin } from "./hooks/use-login"
import { useState } from "react"
import { Eye, EyeClosedIcon, TriangleAlert } from "lucide-react"
import ClipLoader from "react-spinners/ClipLoader";

export function Login() {
   const [showPassword, setShowPassword] = useState(false)

   const { submitLogin, isPending, error } = useBackofficeLogin()

   const form = useForm<LoginSchema>({
      defaultValues: {
         email: "",
         password: ""
      },
      mode: "onChange",
      resolver: zodResolver(loginSchema)
   })

   function handleSubmit({ email, password }: LoginSchema) {
      submitLogin({
         email,
         password
      })

      form.reset()
   }

   return (
      <div className="flex flex-col gap-6 w-md" >
         {error && (
            <div className="border border-red-500 p-4 bg-[#FFE4E2] rounded-md flex items-center gap-2 opacity-0 transition-opacity duration-500 ease-in-out animate-fadeIn">
               <TriangleAlert className="text-red-500" />
               <p className="text-red-500 font-medium">E-mail ou senha incorretos.</p>
            </div>
         )}
         <Card className="h-100 bg-white text-black shadow-lg">
            <CardHeader className="text-center">
               <CardTitle className="text-xl">Bem vindo de volta</CardTitle>
               <CardDescription>Entre com seu e-mail institucional</CardDescription>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)}>
                     <div className="grid gap-6">
                        <div className="grid gap-6">
                           <div className="grid gap-3">
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
                           <div className="grid gap-3">
                              <FormField
                                 control={form.control}
                                 name="password"
                                 render={({ field }) => (
                                    <FormItem>
                                       <div className="flex items-center">
                                          <FormLabel>Senha</FormLabel>
                                          <a
                                             href="#"
                                             className="ml-auto text-sm underline-offset-4 hover:underline text-[#2C7FFF]"
                                          >
                                             Esqueceu sua senha?
                                          </a>
                                       </div>
                                       <FormControl>
                                          <div className="relative">
                                             <Input
                                                placeholder="*********"
                                                type={showPassword ? "text" : "password"}
                                                {...field}
                                             />
                                             <div className="absolute right-4 top-2">
                                                {showPassword
                                                   ? <Eye
                                                      onClick={() => setShowPassword(prev => !prev)}
                                                      className="cursor-pointer text-gray-500 hover:text-gray-800 transition ease-in"
                                                   />
                                                   : <EyeClosedIcon
                                                      onClick={() => setShowPassword(prev => !prev)}
                                                      className="cursor-pointer text-gray-500 hover:text-gray-800 transition ease-in"
                                                   />
                                                }
                                             </div>
                                          </div>
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <Button
                              type="submit"
                              disabled={isPending}
                              className="w-full bg-[#2C7FFF] cursor-pointer hover:bg-[#1F5AC7] hover:font-bold">
                              {isPending ? (
                                 <ClipLoader
                                    color="#ffff"
                                    loading={isPending}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                 />
                              ) : (
                                 "Entrar"
                              )}
                           </Button>
                        </div>
                     </div>
                  </form>
               </Form>
            </CardContent>
         </Card>

      </div>
   )
}
