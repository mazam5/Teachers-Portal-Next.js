"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";
import {
  BookOpenCheck,
  LayoutDashboard,
  ShieldUser,
  Signature,
  Users,
} from "lucide-react";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: Users,
  },
  {
    title: "Leave Management",
    url: "/leave-management",
    icon: Signature,
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: BookOpenCheck,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: ShieldUser,
  },
];

export function AppSidebar() {
  // const SIDEBAR_WIDTH = "16rem";
  // const SIDEBAR_WIDTH_MOBILE = "18rem";
  // const {
  //   state,
  //   open,
  //   setOpen,
  //   openMobile,
  //   setOpenMobile,
  //   isMobile,
  //   toggleSidebar,
  // } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 text-xs md:text-lg lg:text-xl xl:text-2xl">
            Teachers Panel
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="my-1 p-1 text-lg">
                    <Link href={item.url}>
                      <item.icon size={32} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
