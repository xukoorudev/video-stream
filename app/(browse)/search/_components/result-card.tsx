import Link from "next/link"
import { User } from "@prisma/client"
import { formatDistanceToNow } from "date-fns";

import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail"
import { Skeleton } from "@/components/ui/skeleton"
import { VerifiedMark } from "@/components/verified-mark"

interface ResultCardProps {
   data: {
      id: string
      name: string
      thumbnailUrl: string | null
      isLive: boolean
      updatedAt: Date
      user: User
   }   
}

export const ResultCard = ({
   data
}:ResultCardProps) => {
   return (
      <Link href={`/${data.user.username}`}>
         <div className="w-full flex gap-x-4">
            <div className="flex flex-col hover:bg-slate-300/5 w-full h-full rounded-lg border border-b">         
               <div className="relative w-full h-full sm:h-[9rem] sm:w-[16rem]">
                  <Thumbnail 
                     src={data.thumbnailUrl}
                     fallback={data.user.imageUrl}
                     isLive={data.isLive}
                     username={data.user.username}
                  />
               </div>
               <div className=" flex items-baseline justify-between p-2">
                  <div className="space-y-1">
                     <div className="flex items-center gap-x-2">
                        <p className="font-bold text-lg cursor-pointer hover:text-blue-500">
                           {data.user.username}
                        </p>
                        <VerifiedMark />
                     </div>
                     <p className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(data.updatedAt), {
                           addSuffix: true,
                        })}
                     </p>
                  </div>
                     
                     <p className="text-sm text-muted-foreground">
                        @{data.name}
                     </p>
                     
               </div>
            </div>
         </div>
      </Link>

   )
}

export const ResultCardSkeleton = () => {
   return (
      <div className="w-full flex gap-x-4">
         <div className="flex flex-col hover:bg-slate-300/5 w-full h-full rounded-lg border border-b">         
            <div className="relative w-full h-full sm:h-[9rem] sm:w-[16rem]">
            <ThumbnailSkeleton />
         </div>
         <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-12" />
         </div>
      </div>
     </div>
   );
 };