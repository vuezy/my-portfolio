'use client'

import { useEffect } from 'react'
 
export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <div className="
      bg-glow max-w-5xl 2xl:max-w-6xl mx-auto px-6 py-30 xs:py-32 sm:py-36 font-serif transition-colors
      flex flex-col items-center justify-center text-center
    ">
      <h1 className="text-5xl 2xl:text-6xl font-semibold tracking-wide leading-tight mb-2">Something Went Wrong!</h1>
      <p className="text-xl sm:text-2xl font-medium tracking-wide">An unexpected error occurred</p>
    </div>
  );
}