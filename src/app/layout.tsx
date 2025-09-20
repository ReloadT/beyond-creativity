// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import type { Viewport } from 'next';
import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Beyond Creativity - Professional Video Production',
  description:
    'Beyond Creativity offers high-end video production services including corporate videos, event coverage, and creative storytelling.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: 'black',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
