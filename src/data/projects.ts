// Project case-study cards. Copy is verbatim from the brief
// (martin-janus-portfolio-brief.md, section 5). Edit in one place,
// the homepage renders straight from this list.

export type Project = {
  title: string;
  context: string;
  description: string;
  tech: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: 'Autobolting Data Reporting',
    context: 'JLR Slovakia · 2021–2022 (still in daily use)',
    description:
      'Solo-built 10,500-line VBA application with 8 custom userforms. Station-specific data processing for L462 and L663 vehicle programmes (Defender, Discovery). Auto-generated PDF shift reports with date-hierarchical archival. Used daily across bodyshop operations; still running in 2026 with no replacement.',
    tech: ['VBA', 'Excel', 'UserForms', 'PDF export'],
  },
  {
    title: 'Robot Maintenance Heatmap',
    context: 'JLR Slovakia',
    description:
      'Multi-hundred-row Excel + VBA workbook visualising maintenance faults across every robot on the production line. One column per day, one row per robot, cell colour intensity (none → red) reflecting fault frequency. Surfaced degradation patterns at a glance and informed scheduled-downtime decisions.',
    tech: ['VBA', 'Excel', 'Conditional formatting', 'Data viz'],
  },
  {
    title: 'Tooling Designer (CATIA V5)',
    context: 'JLR Slovakia · 2020–2023 · first C# project, pre-AI, fully solo',
    description:
      'Windows desktop app that automated tooling-design file naming and assembly generation for JLR Nitra bodyshop engineers. ~6,900 lines of hand-written C# across 19 modules — login, theming, user/app settings, data editor, CATIA V5 hide-show + replace-missing workflows, a 2,700-line assembly-generator engine, and a Cryptolens-backed trial/license system. Talks to CATIA via its COM type libraries (Infrastructure / Knowledgeware / ProductStructure). Self-taught from Microsoft docs and Stack Overflow — obsolete today, archived for reference.',
    tech: ['C#', '.NET', 'WinForms', 'CATIA V5 COM API', 'Cryptolens'],
  },
  {
    title: 'DB Reporting Automation (Selenium)',
    context: 'JLR Slovakia',
    description:
      'When direct API access to a corporate database was denied, built a C# + Selenium tool that automated the web UI — logging in, running SQL queries through the browser interface, scraping results, and parsing them into structured data. Engineering pragmatism under enterprise access constraints.',
    tech: ['C#', 'Selenium', 'SQL', 'Web automation'],
  },
  {
    title: 'Quizzolingo',
    context: 'Founder · Jan 2026 – present',
    description:
      'Multi-tenant B2B + B2C SaaS learning platform. 11 question types, AI-generated content in 5 languages, real-time multiplayer via SignalR, Stripe-powered marketplace with creator payouts. Estonian OÜ in formation. Selected as a Hummelnest startup-programme candidate (Austria, Jan–Mar 2026), pre-screened by Raiffeisenlandesbank.',
    tech: ['React', 'TypeScript', '.NET 8', 'SQL Server', 'Stripe', 'SignalR', 'Azure'],
    link: { label: 'quizzolingo.com', href: 'https://quizzolingo.com' },
  },
  {
    title: 'Rakkan',
    context: 'Founder · 2026 – present (building)',
    description:
      "Real-time chat for cross-language couples. Persistent per-conversation context — relationship, register, glossary, known people — is injected into every translation, plus back-translation so the sender sees how their message will actually read before it lands. 1:1 WebRTC video with live translated captions (Azure Speech), auto-memory extraction of durable facts (birthdays, names, places — partner-confirmed), Web Push + installable PWA. EN/TH/DE/IT/SK UI. Built from a validated prototype after the founder's partner kept asking for it.",
    tech: ['Next.js 14', 'ASP.NET Core 8', 'SignalR', 'Azure SQL', 'Azure OpenAI', 'Azure Speech', 'WebRTC', 'Stripe'],
    link: { label: 'rakkan.app', href: 'https://rakkan.app' },
  },
  {
    title: 'Ammy Cafe (Pattaya, Thailand)',
    context: "Built for a friend's coffee + smoothie shop · 2025",
    description:
      "Bilingual (Thai / English) public menu + admin CRUD for a café on Soi Buakhao. Built and deployed solo on Cloudflare's free tier — Next.js 15 (App Router, RSC) running on Cloudflare Pages + Workers, with Cloudflare D1 (SQLite) backing menu, photos, and settings. Shows breadth beyond industrial work — modern web stack, real production deployment, real customers.",
    tech: ['Next.js 15', 'TypeScript', 'Cloudflare Pages + Workers', 'Cloudflare D1', 'i18next'],
    link: { label: 'ammy.cafe', href: 'https://ammy.cafe' },
  },
];
