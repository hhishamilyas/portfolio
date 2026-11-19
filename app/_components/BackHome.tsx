import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackHome() {
  return (
    <Link className="page-home-link" href="/">
      <ArrowLeft size={18} aria-hidden="true" /> Home
    </Link>
  );
}
