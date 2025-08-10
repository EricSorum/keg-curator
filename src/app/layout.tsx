import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Keg Curator',
  description: 'Create the best selection of beer to serve in your bar or restaurant.',
}
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-side-bar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            <div id="root">{children}</div>
          </main>
        </SidebarProvider>



        {/* <div id="root">{children}</div> */}
        {/* <script type="module" src="/src/main.tsx"></script> */}
      </body>
    </html>
    )
}