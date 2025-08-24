import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { person } from "./lib/content";
import { Home } from "./types/content.types";
import { ThemeProvider } from "@/components/ui/theme-provider";
import RootLayoutContainer from "./layouts/RootLayoutContainer";
import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { baseURL } from "./lib/constants";
import { LoadingProvider } from "./contexts/LoadingSpinnerProvider";
import Navigation from "@/components/shared/Navigation";

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  return {
    title: home.title,
    description: home.description,
    path: home.path,
    image: home.image,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "Portfolio website showcasing my work.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayoutContainer>
            <LoadingProvider>
              <div className="relative z-10 flex flex-col items-center w-full justify-center">
                <Navigation />
                <div className="pt-20 px-5 max-w-[65rem] mx-auto">
                  {children}
                </div>
              </div>
            </LoadingProvider>
          </RootLayoutContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
