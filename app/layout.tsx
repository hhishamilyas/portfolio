import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Hisham — Brand & Growth Strategist',
  description: 'Portfolio of Muhammad Hisham: brand strategy, creative direction, performance marketing and growth systems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
