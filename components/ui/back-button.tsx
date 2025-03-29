'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from './button';

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant='ghost'
      className='absolute top-8 left-8 p-2 text-lg text-[#183457] hover:bg-[#bdd7f0] transition-colors'
      onClick={() => router.push('/')}
    >
      <ArrowLeft className='h-8 w-8' />
      <span className='ml-2 hidden sm:inline'>Home</span>
    </Button>
  );
}
