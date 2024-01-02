import { Button } from "@/components/ui/button";
import { AlertOctagon } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
   return ( 
      <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
         <AlertOctagon className="w-20 h-20 text-rose-700" />
         <h1 className="text-4xl">
            404
         </h1>
         <p>
            We couldn&apos;t find the page you were looking for.
         </p>
         <Button variant="secondary" className="shadow-md" asChild>
            <Link href='/'>
               Go back home 
            </Link>
         </Button>
      </div>
    );
}
 
export default NotFoundPage;