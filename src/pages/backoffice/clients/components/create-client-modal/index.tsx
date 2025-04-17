import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog"
import { useModal } from "@/hooks/use-modal"
import { CreateClientForm } from "./components/create-client-form"

export function CreateClientModal() {
   const { isOpen, close } = useModal()

   return (
      <Dialog open={isOpen} onOpenChange={close}>
         <DialogContent >
            <DialogHeader>
               <DialogTitle className="pb-2">
                  <h1 className="text-md font-medium">Clientes</h1>
                  <p className="mt-4 flex items-center gap-4 font-medium text-sm">
                     Clientes
                     <div className="inline-block h-1 w-1 rounded-full bg-gray-500/80"></div>
                     <span className="text-gray-500">Adicionar cliente</span>
                  </p>
               </DialogTitle>
               <DialogDescription >
                  <CreateClientForm />
               </DialogDescription>
            </DialogHeader>
         </DialogContent>
      </Dialog>
   )
}