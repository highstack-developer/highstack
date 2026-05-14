import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://highstack.ca'),
  title: {
    default: 'Highstack — Technology Consulting',
    template: '%s | Highstack',
  },
  description:
    'Highstack is a technology consulting firm helping clients accelerate their goals with transformative software, cloud, and data solutions.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://highstack.ca',
    siteName: 'Highstack',
    title: 'Highstack — Technology Consulting',
    description:
      'Highstack is a technology consulting firm helping clients accelerate their goals with transformative software, cloud, and data solutions.',
    images: [
      {
        url: '/assets/Highstack Logo Dark.png',
        width: 2560,
        height: 1440,
        alt: 'Highstack',
      },
    ],
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Highstack — Technology Consulting',
    description:
      'Highstack is a technology consulting firm helping clients accelerate their goals with transformative software, cloud, and data solutions.',
    images: ['/assets/Highstack Logo Dark.png'],
  },
  icons: {
    icon: '/assets/Highstack Needle Dark.png',
    apple: '/assets/Highstack Needle Dark.png',
  },
  authors: [{ name: 'Highstack Inc.' }],
  creator: 'Highstack Inc.',
  publisher: 'Highstack Inc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
