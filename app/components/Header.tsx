'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

const montserratAlt1 = localFont({
  src: '../../public/fonts/MontserratAlt1-Regular.woff2',
  display: 'swap',
});

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="w-full flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/recolored_keas_parrot.png"
            alt="KEAS Parrot Logo"
            width={120}
            height={120}
            priority
          />
        </Link>
        <nav className="flex-1 flex justify-center items-center gap-8">
          <Link
            href="/dashboard"
            className={`${montserratAlt1.className} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
          >
            MARKET INTELLIGENCE
          </Link>
          <Link
            href="/notifications"
            className={`${montserratAlt1.className} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
          >
            TRADING POSITIONS
          </Link>
          <Link
            href="/notifications"
            className={`${montserratAlt1.className} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
          >
            NOTIFICATIONS
          </Link>
          <Link
            href="/trading"
            className={`${montserratAlt1.className} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
          >
            TRADING
          </Link>
          <Link
            href="/crm"
            className={`${montserratAlt1.className} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
          >
            CRM
          </Link>
          <Link
            href="/about"
            className={`${montserratAlt1.className} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
} 