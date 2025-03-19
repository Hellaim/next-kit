'use client'

import { ButtonLucide } from '@/components/shared'
import s from './MainNavigation.module.css'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useBodyScrollLock } from '@/hooks'
import { NavList } from './NavList'
import { NavOverlay } from './NavOverlay'

interface MainNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function MainNavigation({ className, ...props }: MainNavigationProps) {
  const [isShow, setIsShow] = useState(false)
  const firstRender = useRef(true)

  useBodyScrollLock(isShow)

  const showMenu = () => {
    setIsShow(true)
    firstRender.current = false
  }

  const hideMenu = () => {
    setIsShow(false)
  }

  return (
    <div className={clsx(s.container, className)} {...props}>
      <ButtonLucide icon="Menu" size={20} strokeWidth={1.5} onClick={showMenu} />
      <NavOverlay isOpen={isShow} onClose={hideMenu} firstRender={firstRender.current}>
        <NavList onClick={hideMenu} />
      </NavOverlay>
    </div>
  )
}
