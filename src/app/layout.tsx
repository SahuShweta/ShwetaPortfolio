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
  title: "Shweta Sahu | Portfolio - Full Stack Developer",
  description: "Award-winning portfolio showcasing innovative solutions with Python, MERN Stack, and modern web technologies. Computer Science Engineering student specializing in full-stack development.",
  keywords: ["Shweta Sahu", "Computer Science", "Full Stack Developer", "Python", "MERN Stack", "Web Development", "DSA", "React", "Node.js", "Next.js", "Portfolio"],
  authors: [{ name: "Shweta Sahu", url: "https://shwetasahu.dev" }],
  creator: "Shweta Sahu",
  publisher: "Shweta Sahu",
  metadataBase: new URL("https://shwetasahu.dev"),
  openGraph: {
    title: "Shweta Sahu - Full Stack Developer Portfolio",
    description: "Building innovative solutions with Python, MERN Stack, and modern web technologies.",
    type: "website",
    url: "https://shwetasahu.dev",
    siteName: "Shweta Sahu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shweta Sahu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shweta Sahu - Full Stack Developer",
    description: "Building innovative solutions with Python and MERN Stack",
    creator: "@ShwetaSahu",
    images: ["/og-image.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
