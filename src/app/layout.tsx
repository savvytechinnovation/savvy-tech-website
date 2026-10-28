import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://savvytechinnovation.com';
const TITLE = 'Savvy Tech Innovation | Coming Soon';
const DESCRIPTION =
  'A new Savvy Tech Innovation is on its way. We engineer high-performance, custom-coded websites and apps for enterprise scale.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Savvy Tech Innovation' }],
  creator: 'Savvy Tech Innovation',
  publisher: 'Savvy Tech Innovation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Savvy Tech Innovation',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Savvy Tech Innovation - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/preview.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#141a40',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
