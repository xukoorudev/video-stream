"use client"
import { ArrowLeftFromLine, ArrowRightFromLine, LayoutDashboard } from "lucide-react"

import { TooltipHint } from "@/components/tooltip-hint"
import { Button } from "@/components/ui/button"
import { useCreatorSidebar } from "@/store/use-creator-sidebar"
import { Skeleton } from "@/components/ui/skeleton"

export const Toggle = () => {
   const {
      collapsed,
      onExpand,
      onCollapse
   } = useCreatorSidebar((state) => state)

   const label = collapsed ? "Expand" : "Collapse"
   return (
      <>
         {collapsed && (
            <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
               <TooltipHint label={label} side="right" align="start" asChild>
                  <Button 
                     onClick={onExpand}
                     className="h-auto p-2" 
                     variant="ghost"
                  >
                     <ArrowRightFromLine className="h-4 w-4"/>
                  </Button>
               </TooltipHint>
            </div>
         )}
         {!collapsed && (
            <div className="p-3 li-6 mb-2 flex items-center w-full">
               <div className="flex items-center gap-x-2">
                  <LayoutDashboard className="h-5 w-5"/>
                  <p className="font-semibold text-primary">
                     Dashboard
                  </p>
               </div>
               <TooltipHint label={label} side="right" align="start" asChild>
                  <Button 
                     onClick={onCollapse}
                     className="h-auto p-2 ml-auto" 
                     variant="ghost"
                  >
                     <ArrowLeftFromLine className="h-4 w-4"/>
                  </Button>
               </TooltipHint>
            </div>
         )}
      </>
   )
}

export const ToggleSkeleton = () => {
   return (
      <div className="p-3 pl-6 hidden lg:flex items-center justify-between w-full">
         <Skeleton className="h-6 w-[100px]" />
         <Skeleton className="h-6 w-6" />
      </div>
   )
}