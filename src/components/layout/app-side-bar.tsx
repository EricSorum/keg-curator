import { Home, Settings, SquareArrowOutUpRight, GitFork, Info, Braces } from "lucide-react"
import Link from "next/link"
import Title from "./title"
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
    icon: Info,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const footer = [
  {
    title: "About",
    url: "#",
    icon: Info,
  },
  {
    title: "Tech Stack",
    url: "#",
    icon: Braces,
  },
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
        


        <SidebarGroup className="h-full">
          <Title />
          
          <SidebarGroupLabel className="my-4 text-xl">Design your beer menu:</SidebarGroupLabel>
          <SidebarGroupContent>
              <MainForm />
          </SidebarGroupContent>
        </SidebarGroup>

                {/* <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="">
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