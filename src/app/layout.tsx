import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shweta Sahu | Computer Science Engineering Student",
  description: "Building innovative solutions with Python, MERN Stack, and a passion for clean code. Currently exploring full-stack web development and data structures.",
  keywords: ["Shweta Sahu", "Computer Science", "Full Stack Developer", "Python", "MERN Stack", "Web Development", "DSA"],
  authors: [{ name: "Shweta Sahu" }],
  openGraph: {
    title: "Shweta Sahu - Portfolio",
    description: "Computer Science Engineering Student | Python | MERN Stack | Full Stack Developer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shweta Sahu - Portfolio",
    description: "Building innovative solutions with Python and MERN Stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
