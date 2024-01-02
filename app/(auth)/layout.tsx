import { Logo } from "./_components/logo"

export default function AuthLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
    <div className="flex flex-col space-y-6 items-center justify-center h-full">
      <Logo />
      {children}
    </div>
   )
 }
 