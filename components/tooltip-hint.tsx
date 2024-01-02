import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip"
 
 interface TooltipHintProps {
   label: string
   children: React.ReactNode
   asChild?: boolean
   side?: 'top' | 'bottom' | 'left' | 'right'
   align?: 'start' | 'center' | 'end'
 }

 export const TooltipHint = ({
   label,
   children,
   asChild,
   side,
   align
 }:TooltipHintProps) => {
    return (
      <TooltipProvider>
         <Tooltip delayDuration={0}>
            <TooltipTrigger asChild={asChild}>
               {children}
            </TooltipTrigger>
            <TooltipContent className="text-gray-900 bg-slate-300" side={side} align={align}>
               <p className="font-semibold">
                  {label}
               </p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>

    )
 }