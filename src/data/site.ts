// Single source of truth for site-wide copy. Edit here, never in JSX.

export const site = {
  name: 'Martin Janus',
  domain: 'martinjanus.dev',
  url: 'https://martinjanus.dev',
  title: 'Martin Janus — Manufacturing-Technology Specialist · Ex-JLR · Ex-VW',
  description:
    'Manufacturing-technology specialist with 12 years across Volkswagen and Jaguar Land Rover. Solo-shipped 10,500 lines of VBA + C# tooling at JLR. Now founding Quizzolingo. Remote-only.',
  email: 'janus.mato@gmail.com',
  linkedin: 'https://linkedin.com/in/mjns',
  quizzolingo: 'https://quizzolingo.com',
  cvPath: '/Martin_Janus_CV.pdf',
  ogImage: '/og-image.png',
} as const;

export const nav = [
  { href: '#work',       label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about',      label: 'About' },
  { href: '#contact',    label: 'Contact' },
] as const;
