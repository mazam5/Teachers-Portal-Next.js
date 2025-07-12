import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import { TeacherStoreProvider } from "@/components/providers/teacher-store-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teachers Management App - Next.js",
  description: "This web application is used to manage teacher's activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins} ${roboto} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <TeacherStoreProvider>
              <AppSidebar />
              <div className="flex w-full flex-col">
                <Topbar />
                <div className="flex-grow p-3 md:overflow-y-auto md:p-4 lg:p-6 xl:p-8">
                  {children}
                </div>
              </div>
            </TeacherStoreProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
