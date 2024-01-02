"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { useParticipants } from "@livekit/components-react";
import { LocalParticipant, RemoteParticipant } from "livekit-client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatCommunityItem } from "./chat-community-item";



interface ChatCommunityProps {
   viewerName: string
   hostName: string
   isHidden: boolean
}

export const ChatCommunity = ({
   viewerName,
   hostName,
   isHidden
}:ChatCommunityProps) => {
   const [value, setValue] = useState("")
   const debouncedValue = useDebounce<string>(value, 500)

   const participants = useParticipants();

   const onChange = (newValue: string) => {
     setValue(newValue);
   };
 
   const filteredParticipants = useMemo(() => {
     const deduped = participants.reduce((acc, participant) => {
       const hostAsViewer = `host-${participant.identity}`;
       if (!acc.some((p) => p.identity === hostAsViewer)) {
         acc.push(participant);
       }
       return acc;
     }, [] as (RemoteParticipant | LocalParticipant)[]);
 
     return deduped.filter((participant) => {
       return participant.name?.toLowerCase().includes(debouncedValue.toLowerCase())
     });
   }, [participants, debouncedValue]);
   if (isHidden) {
      return (
         <div className="flex flex-1 items-center justify-center">
            <p className="text-sm text-muted-foreground">
               Community is desabled
            </p>
         </div>
      )
   }

   return (
      <div className="p-4">
         <Input 
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search community"
            className="dark:border-white/10 border-gray-600/50 "
         />
         <ScrollArea className="gap-y-2 mt-4">
            <p className="text-center text-sm text-muted-foreground hidden last:block p-2">
               No results
            </p>
            {filteredParticipants.map((participant) => (
               <ChatCommunityItem
                  key={participant.identity}
                  hostName={hostName}
                  viewerName={viewerName}
                  participantName={participant.name}
                  participantIdentity={participant.identity}
               />
            ))}
         </ScrollArea>
      </div>
   )
}