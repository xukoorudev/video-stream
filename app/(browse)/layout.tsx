import { Suspense } from "react";
import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

const BrouseLayout = ({
   children,
}: {
   children: React.ReactNode
}) => {
   return ( 
      <>
         <Navbar />
         <div className="flex h-full pt-20 bg-neutral-100 dark:bg-neutral-900">
            <Suspense fallback={<SidebarSkeleton />}>
               <Sidebar />
            </Suspense>
            <Container >
               {children}
            </Container>
         </div>
      </>
    );
}
 
export default BrouseLayout;