import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import RootLayoutContainer from "./layouts/RootLayoutContainer";
import { LoadingProvider } from "./contexts/LoadingSpinnerProvider";
import Navigation from "@/components/shared/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteConfig = {
  name: "William Gyasi",
  title: "William Gyasi | Full Stack Developer",
  description:
    "Full-Stack Developer with 5+ years of experience building scalable web applications with React, Next.js, Node.js, and AWS.",
  url: "https://williammgyasii.com",
  ogImage: "/images/og/home.jpg",
  twitter: "@williammgyasii",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Web Developer",
    "William Gyasi",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayoutContainer>
            <LoadingProvider>
              <Navigation />
              <main className="pt-20 px-4 w-full max-w-5xl mx-auto">
                {children}
              </main>
            </LoadingProvider>
          </RootLayoutContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
