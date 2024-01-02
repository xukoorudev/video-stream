"use client"

import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user-avatar"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { UnblockButton } from "./unblock-button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BlockedUsers = {
  id: string
  userId: string
  imageUrl: string
  username: string
  createdAt: string
}

export const columns: ColumnDef<BlockedUsers>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4 pl-3">
        <UserAvatar
          username={row.original.username}
          imageUrl={row.original.imageUrl}
        />
        <span>{row.original.username}</span>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Blocked
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return (
        <div className="pl-4">
          {row.original.createdAt}
        </div>
      )
    }
  },
  {
    accessorKey: "Actions",
    cell: ({ row}) => <UnblockButton userId={row.original.userId}/>
  },
]
