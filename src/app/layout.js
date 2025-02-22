import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});



export const metadata = {
  title: "DappRush - An agency that creates everything.",
  description: "DapRush is a dynamic agency specializing in building innovative digital solutions. From cutting-edge web and app development to immersive design and branding, we bring your ideas to life. Join us on a journey of innovation and excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
