import { SidebarGroup, SidebarGroupContent } from "../ui/sidebar"

export default function Title() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-700 m-3">Keg Curator</h1>
          <p className="text-md">Create the best selection of beer to serve in your bar or restaurant.</p>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>    
  )
}