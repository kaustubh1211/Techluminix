// In a client component (e.g., src/components/SmoothScroll.js)
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SmoothScroll({ children }) {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return children;
}