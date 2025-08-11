import { SquareArrowOutUpRight, GitFork, Info, Braces } from "lucide-react"
import Link from "next/link"
import { MainForm } from "../main-form/mainform"
import Title from "./title"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const items = [
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

        <Title />

        <SidebarSeparator />

        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="my-4 text-xl">Design your beer menu:</SidebarGroupLabel>
          <SidebarGroupContent>
            <MainForm />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
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

        <SidebarSeparator />
        
       <SidebarGroup>
          <SidebarGroupContent>
              <div className="text-center text-xs/4">&copy; Copyright 2025 Eric Sorum</div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}