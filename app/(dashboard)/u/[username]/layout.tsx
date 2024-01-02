import { Navbar } from "./_components/navbar";
import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import { Sidebar } from "./_components/sidebar";
import { Container } from "./_components/container";

interface CreatorLayoutProps {
   params: {username: string}
   children: React.ReactNode
}

const CreatorLayout = async ({
   params,
   children
}:CreatorLayoutProps) => {
   const self = await getSelfByUsername(params.username)

   if (!self) {
      redirect('/')
   }

   return ( 
      <>
         <Navbar />
         <div className="flex h-full pt-20 bg-neutral-100 dark:bg-neutral-900">
            <Sidebar />
            <Container>
               {children}
            </Container>
         </div>
      </>
    );
}
 
export default CreatorLayout;