import Image from "next/image"
import { Poppins } from "next/font/google"

import { cn } from '@/lib/utils'
import Link from "next/link";

const font = Poppins({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800"],
 });
 

export const Logo = ( ) => {
   return (
    <Link href='/'>
        <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
          <div className="bg-white rounded-full p-1">
            <Image
              src="/spooky.svg"
              alt="Gamehub"
              height="35"
              width="35"
            />
          </div>
        <div className={cn(
          font.className,
        )}>
          <p className="text-xl font-semibold">
            Gamehub
          </p>
          <p className="text-xs text-muted-foreground">
            Let&apos;s play
          </p>
        </div>
      </div>
      <div className="block lg:hidden bg-white rounded-full p-1.5 mx-2">
        <Image
          src="/spooky.svg"
          alt="Gamehub"
          height="35"
          width="35"
        />
      </div>
    </Link>
   )
}