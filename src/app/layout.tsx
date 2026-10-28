import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://savvytechinnovation.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Savvy Tech Innovation',
    template: '%s | Savvy Tech Innovation',
  },
  description:
    'Savvy Tech Innovation is building a brand new website. Contact us directly in the meantime.',
  authors: [{ name: 'Savvy Tech Innovation' }],
  creator: 'Savvy Tech Innovation',
  publisher: 'Savvy Tech Innovation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: SITE_URL,
    siteName: 'Savvy Tech Innovation',
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
