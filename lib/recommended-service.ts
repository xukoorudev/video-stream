import { db } from "./db"
import { getSelf } from "./auth-service"
import { resolve } from "path"

export const getRecommended = async () => {
   // await new Promise(resolve => setTimeout(resolve, 2000))
   let userId

   try {
      const self = await getSelf()
      userId = self.id
   } catch (error) {
      userId = null
   }

   let users = []

   if (userId) {
      users = await db.user.findMany({
         where: {
            AND: [
               {
                  NOT: {
                     id: userId
                  }
               },
               {
                  NOT: {
                     followedBy: {
                        some: {
                           followerId: userId
                        }
                     }
                  }
               },
               {
                  NOT: {
                     blocking: {
                        some: {
                           blockedId: userId
                        }
                     }
                  }
               },
            ]
         },
         include: {
            stream: true,
         },
         orderBy: {
            createdAt: "desc",
         }
      })
   } else {
      users = await db.user.findMany({
         include: {
            stream: true,
         },
         orderBy: {
            createdAt: "desc",
         }
      })
   }

   return users
}