import { Boxes } from "lucide-react";

import { getBlockedUsers } from "@/lib/block-service";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { format } from "date-fns";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }
 

const CommunityPage = async () => {
   const blockedUsers = await getBlockedUsers()

   const formattedData = blockedUsers.map((block) => ({
      ...block,
      userId: block.blocked.id,
      imageUrl: block.blocked.imageUrl,
      username: block.blocked.username,
      createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy")
   }))
 
   console.log({formattedData})

   return ( 
      <div className="p-6">
         <div className="flex items-center gap-3 mb-4">
            <Boxes className="h-10 w-10 text-purple-500 rounded-lg bg-muted p-1"/>
            <h1 className="text-2xl font-bold">
               Community setting
            </h1>
         </div>
            <DataTable columns={columns} data={formattedData} />
      </div>
    );
}
 
export default CommunityPage;