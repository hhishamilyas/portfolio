'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="top" className="site-header wrap">
      <Link href="/#top" className="brand" aria-label="Home" onClick={closeMenu}>
        <span className="brand-symbol">h<span className="brand-dot">.</span></span>
        <span className="brand-caption">HISHAM<br />ILYAS</span>
      </Link>
      <nav id="main-navigation" className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {navigation.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={closeMenu}>{label}</Link>
        ))}
      </nav>
      <Link className="header-contact" href="/connect" aria-current={pathname === '/connect' ? 'page' : undefined} onClick={closeMenu}>
        LET'S CONNECT <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(open => !open)}
      >
        {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>
    </header>
  );
}
