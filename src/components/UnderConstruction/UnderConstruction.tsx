'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Letter, Phone } from '@solar-icons/react';
import { CONTACT_INFO } from '@/constants/site';

type Language = 'en' | 'es';

interface UnderConstructionProps {
  language?: Language;
}

const CONTENT = {
  en: {
    badge: 'Coming soon',
    title: 'We are building something great',
    subtitle: 'Our website is under construction.',
    description:
      'We are working hard to bring you a brand new experience. In the meantime, you can reach us directly and we will be happy to help.',
    contactLabel: 'Get in touch',
    languageSwitch: 'Español',
    languageHref: '/es',
    footer: 'All rights reserved.',
  },
  es: {
    badge: 'Muy pronto',
    title: 'Estamos construyendo algo increíble',
    subtitle: 'Nuestro sitio web está en construcción.',
    description:
      'Estamos trabajando para traerte una experiencia completamente nueva. Mientras tanto, puedes contactarnos directamente y con gusto te ayudaremos.',
    contactLabel: 'Contáctanos',
    languageSwitch: 'English',
    languageHref: '/',
    footer: 'Todos los derechos reservados.',
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
};

const UnderConstruction: React.FC<UnderConstructionProps> = ({ language = 'en' }) => {
  const t = CONTENT[language];
  const year = new Date().getFullYear();
  const phoneHref = `tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, '')}`;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#141a40] via-[#1a2352] to-[#0d6d91] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#ff5527] blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#0792c2] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b7df9] blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6 lg:px-16">
          <Image
            src="/logo/Logo-white.png"
            alt="Savvy Tech Innovation"
            width={160}
            height={40}
            priority
            className="h-8 w-auto lg:h-10"
          />
          <a
            href={t.languageHref}
            className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-medium text-white/80 transition hover:border-white/50 hover:text-white"
          >
            {t.languageSwitch}
          </a>
        </header>

        {/* Main content */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center lg:px-16">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0792c2]/50 bg-[#0792c2]/10 px-4 py-1.5 text-[13px] font-medium uppercase tracking-wider text-[#66e0fa]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5527] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5527]" />
            </span>
            {t.badge}
          </motion.span>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[820px] text-[32px] font-bold leading-tight sm:text-[44px] lg:text-[56px]"
          >
            {t.title}
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 text-[18px] font-medium text-[#66e0fa] sm:text-[20px]"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-white/70 sm:text-[17px]"
          >
            {t.description}
          </motion.p>

          {/* Progress bar */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 w-full max-w-[420px]"
            aria-hidden="true"
          >
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '72%' }}
                transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[#0792c2] via-[#5b7df9] to-[#ff5527]"
              />
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="text-[13px] font-medium uppercase tracking-wider text-white/50">
              {t.contactLabel}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#ff5527] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#ff5527]/30 transition hover:bg-[#fe3a11]"
              >
                <Letter size={20} />
                {CONTACT_INFO.email}
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                <Phone size={20} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-6 text-center lg:px-16">
          <p className="text-[13px] text-white/50">
            © {year} Savvy Tech Innovation. {t.footer}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UnderConstruction;
