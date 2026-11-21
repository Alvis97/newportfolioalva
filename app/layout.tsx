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
      className={`scroll-smooth antialiased ${inter.variable} ${manrope.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
      <div className="fixed w-full h-full flex justify-between items-between inset-0 -z-10 bg-[var(--background)] md:mb-50">
        <div className="animate-wiggle flex justify-center items-center self-end h-40 w-30 rounded-full blur-3xl bg-[var(--pink)]/30 md:h-55 md:w-50 md:mb-10 md:bg-[var(--pink)]/20">
          <div className="h-20 w-15 rounded-full blur-2xl bg-[var(--pink)]/40 md:bg-[var(--pink)]/20 md:h-30 md:w-25"></div>
        </div>
        <div className="animate-wiggle [animation-delay:500ms] flex justify-center items-center self-start h-30 w-40 rounded-full blur-3xl bg-[var(--pink)]/30 md:bg-[var(--pink)]/30 md:mr-20 md:mt-10">
          <div className="h-20 w-15 rounded-full blur-2xl bg-[var(--pink)]/40 md:bg-[var(--pink)]/20 md:h-30 md:w-25"></div>
        </div>
        </div>  
        {children}
      </body>
    </html>
  );
}
