import"./globals.css";
import { Poppins } from "next/font/google"
import clsx from "clsx";
import Navbar from "@/Components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Marie Portfolio",
  description: "Welcome to my Portfolio. I am a software engineer specializing in full-stack development, committed to building innovative and efficient solutions. Explore my portfolio to see how I leverage technology to create impactful applications."
}

function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={clsx(poppins.variable, "bg-background text-foreground")}>
        <div>
          <div className="fixed w-full z-10">
            <Navbar />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout;