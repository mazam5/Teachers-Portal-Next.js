"use client";
import { ToggleTheme } from "@/components/theme/toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Topbar = () => {
  return (
    <div className="h-16 w-full bg-[#3498db] px-5">
      <div className="flex h-full items-center justify-between">
        <SidebarTrigger />
        <div className="flex gap-2">
          <ToggleTheme />
          <Popover>
            <PopoverTrigger className="hover:cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="m-5">
              <div className="lg:w-10% lg:h-64">
                <div className="flex gap-4">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h2>Richmond Hill</h2>
                    <h3>richmondhill@edu.co.in</h3>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
