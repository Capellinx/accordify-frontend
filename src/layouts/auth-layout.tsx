import { FeatureItem } from "@/components/feature-item";
import { Settings, ThumbsUp, Wand2, Wrench } from "lucide-react";
import { Outlet } from "react-router-dom";


export function AuthLayout() {
   return (
      <div className="min-h-screen bg-[#F4F4F5] text-gray-300 flex items-center justify-center p-4 relative overflow-hidden">
         <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-20 items-center relative z-10">
            <div className="w-full md:w-1/2 space-y-10">
               <div className="mb-12">
                  <div className="flex items-center gap-2">
                     <div className="text-blue-500 text-2xl">✳</div>
                     <span className="text-blue-500 font-semibold text-xl">Accordify (Backoffice)</span>
                  </div>
               </div>

               <div className="space-y-8">
                  <FeatureItem
                     icon={<Settings className="w-5 h-5 text-blue-500" />}
                     title="Desempenho Adaptável"
                     description="Nosso CRM se adapta automaticamente às suas necessidades, agilizando processos e facilitando a gestão de contratos."
                  />

                  <FeatureItem
                     icon={<Wrench className="w-5 h-5 text-blue-500" />}
                     title="Construído para Durabilidade"
                     description="A plataforma foi desenvolvida para garantir que você tenha um controle seguro e confiável de todos os contratos ao longo do tempo."
                  />

                  <FeatureItem
                     icon={<ThumbsUp className="w-5 h-5 text-blue-500" />}
                     title="Experiência Intuitiva"
                     description="Com uma interface simples e objetiva, o uso do CRM e gestão de contratos se torna mais eficiente e sem complicações."
                  />

                  <FeatureItem
                     icon={<Wand2 className="w-5 h-5 text-blue-500" />}
                     title="Funcionalidade Inovadora"
                     description="Com recursos inovadores, nossa solução CRM + Contratos é a escolha certa para otimizar o seu dia a dia, sempre atualizada às novas necessidades do mercado."
                  />
               </div>
            </div>
            <Outlet/>
         </div>
      </div>
   )
}