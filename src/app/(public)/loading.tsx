'use client'

import { PageLoader } from '@/components/loaders/PageLoader/PageLoader'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return show ? <PageLoader /> : null
}
