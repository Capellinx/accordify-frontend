
export function FeatureItem({
   icon,
   title,
   description,
}: {
   icon: React.ReactNode
   title: string
   description: string
}) {
   return (
      <div className="flex gap-4">
         <div className="mt-1">{icon}</div>
         <div>
            <h3 className="font-medium text-zinc-700 mb-1">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
         </div>
      </div>
   )
}