import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
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
  openGraph: {
    type: 'website',
    url: 'https://highstack.ca',
    siteName: 'Highstack',
    title: 'Highstack — Technology Consulting',
    description:
      'Highstack is a technology consulting firm helping clients accelerate their goals with transformative software, cloud, and data solutions.',
    images: ['/assets/Highstack Logo Dark.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Highstack — Technology Consulting',
    description:
      'Highstack is a technology consulting firm helping clients accelerate their goals with transformative software, cloud, and data solutions.',
  },
  icons: {
    icon: '/assets/Highstack Needle Dark.png',
    apple: '/assets/Highstack Needle Dark.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
