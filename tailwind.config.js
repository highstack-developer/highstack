/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5C000',
          ink: '#1C1C2E',
          offwhite: '#F5F4F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      fontSize: {
        display: ['48px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        h1: ['36px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['18px', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        sm: ['14px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        label: ['11px', { lineHeight: '1.2', letterSpacing: '0.10em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
