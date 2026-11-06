import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Inter } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${manrope.variable}`}
    >
      <body className="min-h-full flex flex-col">
      <div className="fixed w-full h-full flex justify-between items-between inset-0 -z-10 bg-[var(--background)]">
        <div className="animate-wiggle flex justify-center items-center self-end h-40 w-30 rounded-full blur-3xl bg-[var(--pink)]/30">
          <div className="h-20 w-15 rounded-full blur-2xl bg-[var(--pink)]/30"></div>
        </div>
        <div className="animate-wiggle flex justify-center items-center self-start h-30 w-40 rounded-full blur-3xl bg-[var(--pink)]/30">
          <div className="h-20 w-15 rounded-full blur-2xl bg-[var(--pink)]/30"></div>
        </div>
        </div>  
        {children}
      </body>
    </html>
  );
}
