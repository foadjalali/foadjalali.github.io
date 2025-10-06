import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Foad Jalali | Software Engineer",
  description:
    "Personal portfolio website of Foad Jalali, a Software Engineer specializing PHP and Python",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },

} satisfies import("next").Metadata

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
