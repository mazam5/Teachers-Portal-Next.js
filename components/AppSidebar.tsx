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
  useSidebar,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: Users,
  },
];

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();

  const handleItemClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };
  return (
    <Sidebar collapsible="icon" className="select-none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 text-xs md:text-lg lg:text-xl xl:text-2xl">
            Teachers Panel
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={handleItemClick}
                    asChild
                    className="my-1 p-1 text-lg"
                  >
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
