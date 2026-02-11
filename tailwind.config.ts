import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2C2C',
        'charcoal-light': '#3A3A3A',
        'warm-white': '#FAF9F7',
        stone: '#E8E4DF',
        ember: '#D46A3A',
        'ember-light': '#F2E0D5',
        'ember-dark': '#B85A30',
        success: '#4A9D6E',
        'success-light': '#E8F5EE',
        caution: '#D4A83A',
        'caution-light': '#FDF6E3',
        error: '#C45B4A',
        'error-light': '#FBE9E7',
        'gray-100': '#F5F4F2',
        'gray-300': '#D1CEC9',
        'gray-500': '#8A8580',
        'gray-700': '#5C5854',
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(44,44,44,0.06)',
        md: '0 2px 8px rgba(44,44,44,0.08)',
        lg: '0 4px 16px rgba(44,44,44,0.10)',
        xl: '0 8px 32px rgba(44,44,44,0.12)',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
};

export default config;
