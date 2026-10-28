import type { Metadata } from 'next';
import UnderConstruction from '@/components/UnderConstruction';

export const metadata: Metadata = {
  title: 'En Construcción',
  description:
    'Savvy Tech Innovation está construyendo un sitio web completamente nuevo. Mientras tanto, contáctanos directamente.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/es',
    languages: {
      'en-US': '/',
      'es-ES': '/es',
    },
  },
};

export default function EnConstruccionPage() {
  return <UnderConstruction language="es" />;
}
