'use client'

import { usePathname } from 'next/navigation'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

interface NavLinkProps extends LinkProps {
  activeClassName?: string
  className?: string
  children: React.ReactNode
  prefeth?: boolean
}

export function NavLink({
  activeClassName = 'active',
  className,
  children,
  prefetch = false,
  ...props
}: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === props.href

  return (
    <Link
      {...props}
      className={clsx(className, isActive && activeClassName)}
      prefetch={prefetch}
    >
      {children}
    </Link>
  )
}
