"use client"

import Link from 'next/link'

interface NavTabsProps {
  fontClass?: string;
}

export function NavTabs({ fontClass = '' }: NavTabsProps) {
  return (
    <nav className="flex justify-center items-center gap-12">
      <Link
        href="/"
        className={`${fontClass} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
      >
        HOME
      </Link>
      <Link
        href="/dashboard"
        className={`${fontClass} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
      >
        DASHBOARD
      </Link>
      <Link
        href="/about"
        className={`${fontClass} text-[#4484d4] text-xl font-light tracking-[0.2em] hover:text-[#2b5a9e] transition-colors`}
      >
        ABOUT
      </Link>
    </nav>
  )
}
