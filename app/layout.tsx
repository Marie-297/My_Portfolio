import"./globals.css";
import { Poppins } from "next/font/google"
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Marie Portfolio",
  description: ""
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(poppins.variable, "bg-background text-foreground")}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;