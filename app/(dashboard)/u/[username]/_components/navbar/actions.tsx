

import Link from "next/link"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle-button"
import { Skeleton } from "@/components/ui/skeleton"
import { UserButton } from "@clerk/nextjs"



export const Actions = async () => {

   return (
      <div className="flex items-center justify-end gap-x-2">
         <ModeToggle />
         <Button 
            size="sm" 
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
         >
            <Link href='/' className="flex items-center justify-between">
               <LogOut className="h-5 w-5 mr-2"/>
               Exit
            </Link>
         </Button>
         <UserButton afterSignOutUrl="/"/>
      </div>
   )
}

export const ActionsSkeleton = () => {
   return (
      <div className="">
         <Skeleton className="h-8 w-8 rounded-full" />
      </div>
   )
}