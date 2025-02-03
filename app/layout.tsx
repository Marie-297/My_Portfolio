import"./globals.css";
import { Poppins } from "next/font/google"
import { JetBrains_Mono } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/Components/Navbar";
import PageTransform from "@/Components/PageTransform";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-poppins",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Marie Portfolio",
  description: "Welcome to my Portfolio. I am a software engineer specializing in full-stack development, committed to building innovative and efficient solutions. Explore my portfolio to see how I leverage technology to create impactful applications."
}

function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={clsx(poppins.variable, "bg-background text-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem ={false}>
          <div>
            <div className="fixed w-full z-50">
              <Navbar />
            </div>
          <div className="pt-14">
            <PageTransform>
                {children}
              </PageTransform>
          </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;