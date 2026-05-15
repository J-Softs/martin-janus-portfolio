/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        surface: 'var(--surface)',
        ink:     'var(--ink)',
        muted:   'var(--muted)',
        line:    'var(--line)',
        accent:  'var(--accent)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      letterSpacing: {
        'tightish': '-0.02em',
        'wider-label': '0.08em',
      },
      maxWidth: {
        'prose-narrow': '720px',
        'prose-wide': '800px',
        'grid-wide': '1100px',
      },
      fontSize: {
        'label': ['11px', { lineHeight: '1', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
};
