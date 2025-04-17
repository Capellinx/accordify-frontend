import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import userImage from "@/assets/png/user.png"
import { useRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useCreateClientForm } from "../../../hooks/use-create-client-form";

export function CreateClientForm() {
   const [logo, setLogo] = useState<string | null>(null);
   const { form, onSubmit, isPending } = useCreateClientForm()

   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setLogo(reader.result as string);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <Form {...form}>
         <form className="space-y-6" onSubmit={form.handleSubmit((v) => onSubmit(v))}>
            <div className="flex justify-center">
               <div className="relative w-32 h-32">
                  <img
                     src={logo ?? userImage}
                     alt="Adicionar um imagem"
                     className="w-full h-full object-cover rounded-full border border-muted shadow text-center "
                  />
                  <input
                     type="file"
                     accept="image/*"
                     ref={fileInputRef}
                     className="hidden"
                     onChange={handleImageChange}
                  />
                  <Button
                     type="button"
                     variant="outline"
                     size="sm"
                     className="absolute bottom-0 right-0 rounded-full cursor-pointer"
                     onClick={() => fileInputRef.current?.click()}
                  >
                     <Upload />
                  </Button>
               </div>
            </div>

            <FormField
               control={form.control}
               name="socialReason"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Razão Social</FormLabel>
                     <FormControl>
                        <Input placeholder="Digite a razão social" {...field} />
                     </FormControl>
                     <FormMessage/> 
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="cnpj"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>CNPJ</FormLabel>
                     <FormControl>
                        <Input placeholder="00.000.000/0000-00" {...field} />
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
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                        <Input type="email" placeholder="email@empresa.com" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button
               type="submit"
               className="w-full bg-[#2A86F5] hover:bg-[#0961DC] cursor-pointer"
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
                  <p className="text-white">Entrar</p>
               )}
            </Button>
         </form>
      </Form>
   )
}