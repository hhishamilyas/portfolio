import type { Metadata } from 'next';
import './globals.css';

const title = 'Hisham Ilyas | Marketing Strategist & Creative Leader';
const description = 'Explore Hisham Ilyas’s portfolio across brand strategy, creative direction, performance marketing and marketing operations.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
