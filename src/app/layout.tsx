import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themes/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NextAuthSessionProvider from "@/providers/auth/NextAuthSessionProvider";
import { Toaster } from "@/components/cn/ui/sonner";
import StoreProvider from "@/providers/store/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Red",
  description: "A Developer's Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <NextAuthSessionProvider>
        <body className={`${geistSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
              <section>
                <Navbar />
              </section>
              <section>{children}</section>
              <Toaster />
              <section>
                <Footer />
              </section>
            </StoreProvider>
          </ThemeProvider>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
