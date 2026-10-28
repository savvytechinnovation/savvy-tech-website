import type { Metadata } from 'next';
import UnderConstruction from '@/components/UnderConstruction';

export const metadata: Metadata = {
  title: 'Under Construction',
  description:
    'Savvy Tech Innovation is building a brand new website. Contact us directly in the meantime.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-ES': '/es',
    },
  },
};

export default function UnderConstructionPage() {
  return <UnderConstruction language="en" />;
}
