"use client"
import { useState, useEffect } from "react"

import { cn } from "@/lib/utils"
import { useCreatorSidebar } from "@/store/use-creator-sidebar"
import { ToggleSkeleton } from "./toggle"

interface WrapperProps {
   children: React.ReactNode
}

export const Wrapper = ({
   children
}: WrapperProps) => {

   const [isClient, setIsClient] = useState(false)
   const { collapsed } = useCreatorSidebar((state) => state)

   useEffect(() => {
      setIsClient(true)
   }, [])

   if (!isClient) return (
      <aside className={cn(
         "fixed flex left-0 flex-col w-[70px] lg:w-60 h-full  bg-neutral-200 dark:bg-neutral-950 border-r border-[#c7c9d4] dark:border-[#2D2E35] z-50",      
      )}>
         <ToggleSkeleton />
      </aside>
   )

   return (
      <aside className={cn(
         "fixed flex left-0 flex-col w-60 h-full  bg-neutral-200 dark:bg-neutral-950 border-r border-[#c7c9d4] dark:border-[#2D2E35] z-50",
         collapsed && 'w-[70px]'
      )}>
         {children}
      </aside>
   )
}