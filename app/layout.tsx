import type { Metadata } from 'next';
import './globals.css';
import './_components/motion/interactions.css';
import MotionProvider from './_components/motion/MotionProvider';
import SiteHeader from './_components/SiteHeader';

const title = 'Hisham Ilyas | Marketing Strategist & Creative Leader';
const description = 'Explore Hisham Ilyas’s portfolio across brand strategy, creative direction, performance marketing and marketing operations.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><MotionProvider>{children}</MotionProvider></body></html>;
}
