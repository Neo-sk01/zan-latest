import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import FooterSection from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zan Orthodontics",
  description: "Landing template from Shadcn",
  icons: {
    icon: "/2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
