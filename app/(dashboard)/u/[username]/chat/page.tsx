import { MessageSquare } from "lucide-react";

import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import { ToggleCard } from "./_components/toggle-card";

const ChatPage = async () => {
   const self = await getSelf()
   const stream = await getStreamByUserId(self.id)

   if (!stream) {
      throw new Error("stream not found!")
   }

   return ( 
      <div className="p-6">
         <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-10 w-10 text-purple-500 rounded-lg bg-muted p-1"/>
            <h1 className="text-2xl font-bold">
               Chat setting
            </h1>
         </div>
         <div className="space-y-4">
            <ToggleCard
               field="isChatEnabled"
               label="Enable chat"
               value={stream.isChatEnabled}
            />
            <ToggleCard
               field="isChatDelayed"
               label="Delay chat"
               value={stream.isChatDelayed}
            />
            <ToggleCard
               field="isChatFollowersOnly"
               label="Must be following to chat"
               value={stream.isChatFollowersOnly}
            />
         </div>
      </div>
    );
}
 
export default ChatPage;