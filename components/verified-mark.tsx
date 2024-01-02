import { CheckCheck } from "lucide-react"

export const VerifiedMark = () => {
   return (
      <div className="">
         <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600">
            <CheckCheck className="h-[10px] w-[10px] text-primary stroke-[4px]" />
         </div>
      </div>
   )
}