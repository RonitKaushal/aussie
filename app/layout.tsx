import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from 'sonner';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Aussie CA – Master Australian Bookkeeping, GST & Xero",
  description:
    "Learn Australian GST, BAS, Payroll & Xero from a Chartered Accountant. Practical, job-ready training designed for Indian accounting professionals who want to work with Australian clients.",
  keywords: [
    "Australian accounting course",
    "GST BAS training",
    "Xero training India",
    "Australian bookkeeping course",
    "Payroll STP training",
    "BAS preparation course",
    "CA Shalini Jain",
    "Australian outsourcing accounting",
    "Xero practical training",
    "Accounting course for Indian professionals",
  ],
  authors: [{ name: "The Aussie CA" }],
  creator: "The Aussie CA",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://theaussieca.com"), // replace with actual domain

  openGraph: {
    title: "The Aussie CA – Master Australian GST, BAS & Xero",
    description:
      "Become client-ready for Australian firms. Practical GST, BAS, Payroll & Xero training led by a Chartered Accountant.",
    url: "https://theaussieca.com", // replace with actual domain
    siteName: "The Aussie CA",
    images: [
      {
        url: "https://theaussieca.com/preview.jpg", // replace with your preview image
        width: 1200,
        height: 630,
        alt: "The Aussie CA – Australian Accounting Course",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Aussie CA – Australian Accounting & Xero Training",
    description:
      "Practical GST, BAS, Payroll & Xero training designed for Indian professionals working with Australian clients.",
    images: ["https://theaussieca.com/preview.jpg"],
  },
};

 
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Analytics />
          <Toaster richColors position="top-right" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
