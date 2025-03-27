// import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themes/theme-provider";
import Navbar from "@/components/shered/Navbar";
import Footer from "@/components/shered/Footer";

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
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <section>
            <Navbar />
          </section>
          <section>
            {children}
          </section>
          <section>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
