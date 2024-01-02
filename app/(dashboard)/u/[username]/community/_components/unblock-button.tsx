"use client"

import { onUnblock } from "@/actions/blockeActions"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"

interface UnblockButtonProps {
   userId: string
}

export const UnblockButton = ({
   userId 
}:UnblockButtonProps) => {
   const [isPending, startTransition] = useTransition()

   const onClick = () => {
      startTransition(() => {
         onUnblock(userId)
         .then((result) => toast.success(`User ${result.blocked.username} unblocked`))
         .catch(() => toast.error("Someting went wrong"))
      })
   }
   return (
      <Button
         disabled={isPending}
         onClick={onClick}
         variant="outline"
         size="sm"
         className="text-blue-600"
      >
         {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Unblock"}
      </Button>
   )
}