import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next'
import './globals.css';
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Alwadi Almudea Technical Services | Painting, Maintenance, Tile Fixing & Wood Fixing in Dubai',
    template: '%s | DMV Home Development',
  },
  description:
    'AWTS technical services delivers detail-driven interior & exterior painting, tile installation & repair, wood staining & fixing, and home repairs across Dubai and the AWTS. Where vision meets transformation.',
  keywords: [
    'painting and contractor Dubai',
    'interior painting AWTS',
    'exterior painting Dubai',
    'tile fixing and repair',
    'wood fixing and repair in dubai',
    'best maintenance works in Dubai',
    'best painting works in Dubai',
    'deck staining and restoration',
    'home repairs AWTS',
    'Alwadi Almudea Technical Services',
    'awts technical services'
  ],
icons: {
    icon: [
      { url: "/icon.png" },
      // { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} light`}>
<body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Page Main Content */}
        <main className="grow min-h-screen">{children}</main>
      </body>
    </html>
  );
}