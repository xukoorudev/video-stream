"use client"

import { updateStream } from "@/actions/streamAction"
import { Switch } from "@/components/ui/switch"

import { toast } from "sonner"
import { useTransition } from "react"
import { Skeleton } from "@/components/ui/skeleton"


type FieldTypes = 'isChatEnabled' | 'isChatDelayed' | 'isChatFollowersOnly'

interface ToggleCardProps {
   
   field: FieldTypes
   label: string
   value: boolean
}

export const ToggleCard = ({
   field,
   label,
   value = false
}:ToggleCardProps) => {
   const [isPending, startTransition] = useTransition()
   
   const onChange = () => {
      startTransition(() => {
         updateStream({ [field]: !value})
         .then(() => toast.success("Chat setting updated!"))
         .catch(() => toast.error("something went wronge!"))
      })
   }
   return (
      <div className="rounded-xl bg-muted/40 p-5 shadow-md border-t-2">
         <div className="flex items-center justify-between">
            <p className="font-semibold shrink-0">
               {label}
            </p>
            <Switch 
               disabled={isPending}
               onCheckedChange={onChange}
               checked={value}
            >
               {value ? "On" : "Off" }
            </Switch>
         </div>
      </div>
   )
}

export const ToggleCardSkeleton = () => {
   return (
      <Skeleton className="rounded-xl p-8 w-full"/>
   )
}