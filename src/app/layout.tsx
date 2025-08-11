import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Keg Curator',
  description: 'Create the best selection of beer to serve in your bar or restaurant.',
}
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-side-bar"

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
            <SidebarTrigger className="bg-slate-200"/>
            <div id="root">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
    )
}