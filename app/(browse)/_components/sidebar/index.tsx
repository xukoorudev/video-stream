import { Following, FollowingSkeleton } from "./following"
import { RecommendedSkeleton, Recommened } from "./recommened"
import { Toggle, ToggleSkeleton } from "./toggle"
import { Wrapper } from "./wrapper"

import { getFollowedUsers } from "@/lib/follow-service"
import { getRecommended } from "@/lib/recommended-service"

export const Sidebar = async () => {
   const recommended = await getRecommended()
   const following = await getFollowedUsers()
   return (
      <Wrapper>
         <Toggle/>
         <div className="space-y-4 pt-4 lg:pt-0">
            <Following data={following}/>
            <Recommened data={recommended} />
         </div>
      </Wrapper>
   )
}

export const SidebarSkeleton = () => {
   return (
      <aside className="fixed left-0 flex-col w-[70px] lg:w-60 h-full bg-background border-r z-50">
         <ToggleSkeleton />
         <FollowingSkeleton />
         <RecommendedSkeleton />
      </aside>
   )
}