'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import TechLuminixLoader from './TechLuminixLoader'

export default function PageTransition({ children }) {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false) // State to track whether the component is mounted
  const pathname = usePathname()

  useEffect(() => {
    // This effect will run only on the client
    setMounted(true) // Mark the component as mounted
  }, [])

  useEffect(() => {
    // Trigger loading after a delay when pathname changes
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  // Render null or the loader until mounted
  if (!mounted) return null

  return loading ? <TechLuminixLoader /> : children
}
