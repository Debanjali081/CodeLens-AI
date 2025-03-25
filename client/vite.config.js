import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          darkMode: 'class',
          theme: {
            extend: {
              colors: {
                // Light mode colors - improved for better visibility
                light: {
                  primary: '#ffffff',
                  secondary: '#f8fafc',  // Lighter background
                  background: '#ffffff',
                  surface: '#f1f5f9',    // Subtle surface color
                  border: '#e2e8f0',     // Soft border color
                  text: {
                    primary: '#1e293b',  // Darker text for better contrast
                    secondary: '#475569', // Secondary text
                    muted: '#64748b'     // Muted text
                  },
                  accent: {
                    primary: '#2563eb',  // Brighter blue
                    hover: '#1d4ed8',    // Darker blue for hover
                    muted: '#bfdbfe'     // Light blue for backgrounds
                  }
                },
                // Dark mode colors - kept the same
                dark: {
                  primary: '#1f2937',
                  secondary: '#111827',
                  text: '#ffffff',
                  accent: '#60a5fa',
                },
              },
              // Add shadow utilities for better depth in light mode
              boxShadow: {
                'light-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'light': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
                'light-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              }
            },
          },
        }),
        autoprefixer(),
      ],
    },
  },
})

