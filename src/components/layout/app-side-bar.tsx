import { Calendar, Home, Inbox, Search, Settings, SquareArrowOutUpRight, GitFork } from "lucide-react"
import Link from "next/link"

import { MainForm } from "../main-form/mainform"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "About",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const footer = [
  {
    title: "View on GitHub",
    url: "https://github.com/EricSorum/keg-curator",
    icon: GitFork,
  },
  {
    title: "Go to Portfolio site",
    url: "https://ericsorum.com",
    icon: SquareArrowOutUpRight,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>View Info:</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* maybe this is where we put pop up links? */}
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="my-4 text-xl">Design your beer menu:</SidebarGroupLabel>
          <SidebarGroupContent>
              <MainForm />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="flex-row relative b-0">
              {footer.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} title={item.title} target="_blank" className="flex gap-2">
                      <item.icon />
                      {item.title} 
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       <SidebarGroup>
          <SidebarGroupContent>
              <div className="text-center text-xs/4">&copy; Copyright 2025 Eric Sorum</div>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}