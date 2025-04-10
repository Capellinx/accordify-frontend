import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import userImage from "@/assets/png/user.png"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

export function CreateClientForm() {
   const form = useForm()

   const [logo, setLogo] = useState<string | null>(null);
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
         <form className="space-y-6">
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
               name="companyName"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Razão Social</FormLabel>
                     <FormControl>
                        <Input placeholder="Digite a razão social" {...field} />
                     </FormControl>
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
                  </FormItem>
               )}
            />

            <Button type="submit" className="w-full bg-[#2A86F5] hover:bg-[#0961DC] cursor-pointer">Criar</Button>
         </form>
      </Form>
   )
}