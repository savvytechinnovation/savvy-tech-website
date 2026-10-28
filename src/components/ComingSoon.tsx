import Image from 'next/image';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants/site';
import SocialIcon from './SocialIcon';

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#293786_0%,_#141a40_45%,_#0b0f2a_100%)]" />
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-lightBlue-500/25 blur-[140px] animate-float-slow" />
        <div className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-navyBlue-500/30 blur-[120px] animate-float" />
        <div className="absolute left-1/2 top-[12%] h-56 w-56 -translate-x-1/2 rounded-full bg-orange-500/15 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <Image
          src="/logo/Logo-white.png"
          alt="Savvy Tech Innovation"
          width={160}
          height={40}
          priority
          className="h-8 w-auto sm:h-9"
        />
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden text-sm font-medium text-white/70 transition hover:text-white sm:inline"
        >
          {CONTACT_EMAIL}
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-lightBlue-300 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lightBlue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lightBlue-400" />
          </span>
          Coming soon
        </span>

        <h1
          className="animate-fade-up mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          Something new is{' '}
          <span className="bg-gradient-to-r from-lightBlue-300 via-lightBlue-400 to-navyBlue-500 bg-clip-text text-transparent">
            on its way
          </span>
          .
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          We are building the next version of Savvy Tech Innovation. High-performance,
          custom-coded websites and apps for enterprise scale, architected for the digital
          future of your industry.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: '360ms' }}
        >
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white shadow-[0_10px_40px_-10px_rgba(254,58,17,0.7)] transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Start a project
          </a>
          <a
            href={SOCIAL_LINKS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Follow our progress
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-5 px-6 py-8 sm:flex-row sm:justify-between sm:px-10">
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} Savvy Tech Innovation. All rights reserved.
        </p>
        <ul className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ name, url }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-lightBlue-400/60 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightBlue-400"
              >
                <SocialIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
