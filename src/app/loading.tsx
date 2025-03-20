'use client'

import { RootLoader } from '@/components/loaders'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return show ? <RootLoader /> : null
}
