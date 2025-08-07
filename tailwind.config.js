/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Slate Blue / Charcoal Gray - Primary background colors
        'slate-dark': {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#2B2F3C',
          900: '#1B1F2A',
        },
        
        // Matte Black / Dark Graphite - Vacuum body colors
        'graphite': {
          50: '#f6f6f7',
          100: '#e1e1e3',
          200: '#c4c4c9',
          300: '#a0a0a7',
          400: '#64646f',
          500: '#4a4a55',
          600: '#3a3a44',
          700: '#2d2d35',
          800: '#212328',
          900: '#0F1012',
        },
        
        // Cool Gray / Gunmetal Gray - Accent and structural elements
        'gunmetal': {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e3e5e8',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4B4F57',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        
        // White / Light Gray - Icons and symbols
        'light': {
          50: '#FFFFFF',
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#CCCCCC',
          600: '#9ca3af',
          700: '#6b7280',
          800: '#4b5563',
          900: '#374151',
        }
      }
    },
  },
  plugins: [],
}