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
  title: "DappRush - An Agency That Creates Everything",
  description:
    "DappRush is a dynamic agency specializing in building innovative digital solutions. From cutting-edge web and app development to immersive design and branding, we bring your ideas to life. Join us on a journey of innovation and excellence.",
  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon.ico", // Browser shortcut icon
    apple: "/apple-touch-icon.png", // iOS devices ke liye
    other: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
      { rel: "manifest", url: "/site.webmanifest" }, // PWA Support
    ],
  },
  openGraph: {
    title: "DappRush - An Agency That Creates Everything",
    description:
      "DappRush is a dynamic agency specializing in web & app development, immersive design, and branding. We bring your ideas to life.",
    url: "https://dapprush.com", // Apni actual site ka URL daal
    siteName: "DappRush",
    images: [
      {
        url: "/og-image.png", // Social media preview image
        width: 1200,
        height: 630,
        alt: "DappRush - Innovate, Build, Create",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DappRush - An Agency That Creates Everything",
    description:
      "DappRush is a cutting-edge digital agency specializing in development, design, and branding.",
    images: ["/og-image.png"], // Twitter pe preview ke liye
  },
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
