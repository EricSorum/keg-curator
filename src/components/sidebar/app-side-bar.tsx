import { SquareArrowOutUpRight, GitFork, Info, Braces, Home } from "lucide-react"
import Link from "next/link"
import { MainForm } from "../main-form/mainform"
import Title from "./title"
import ResetDatabaseButton from "../beer/ResetDatabaseButton"

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
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Tech Stack",
    url: "/tech",
    icon: Braces,
  },
  {
    title: "View on GitHub",
    url: "https://github.com/EricSorum/keg-curator",
    icon: GitFork,
  },
  {
    title: "Go to EricSorum.com",
    url: "https://ericsorum.com",
    icon: SquareArrowOutUpRight,
  }
]

// Boolean to check if we are running in dev environment.
const isDev: boolean = process.env.NODE_ENV === "development";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col h-full p-6">

        <Title />
        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="my-4 text-xl">Create your beer menu:</SidebarGroupLabel>
          <SidebarGroupContent>
            <MainForm />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Reset API call button is available only in development*/} 
        {isDev && <ResetDatabaseButton />}

        <SidebarGroup className="flex-1">
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      href={item.url} 
                      title={item.title} 
                      target={item.url.startsWith('http') ? "_blank" : undefined}
                      className="flex gap-2"
                    >
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