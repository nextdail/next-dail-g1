import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContacts from '@/components/shared/FloatingContacts';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Dail - Digital Solutions Agency',
  description: 'Transform your business with innovative digital solutions. Expert SEO, web development, mobile apps, and digital marketing services.',
  keywords: 'digital agency, SEO, web development, mobile apps, digital marketing, Kolkata',
  authors: [{ name: 'Next Dail' }],
  openGraph: {
    title: 'Next Dail - Digital Solutions Agency',
    description: 'Transform your business with innovative digital solutions',
    url: 'https://nextdail.com',
    siteName: 'Next Dail',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Dail - Digital Solutions Agency',
    description: 'Transform your business with innovative digital solutions',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
          <Analytics />
        </main>
        <Footer />
        <FloatingContacts />
      </body>
    </html>
  );
}
