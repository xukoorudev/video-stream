"use client"

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
   return ( 
      <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
         <AlertTriangle className="w-20 h-20 text-muted-foreground text-rose-600" />
         <p>
            Somethimg went wrong!
         </p>
         <Button variant="secondary" asChild>
            <Link href='/'>
               Go back home 
            </Link>
         </Button>
      </div>
    );
}
 
export default ErrorPage;