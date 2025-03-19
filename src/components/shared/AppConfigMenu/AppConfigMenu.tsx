'use client'

import { ButtonClose, ButtonLucide } from '@/components/shared'
import s from './AppConfigMenu.module.css'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useBodyScrollLock } from '@/hooks'

interface AppConfigMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function AppConfigMenu({ className, ...props }: AppConfigMenuProps) {
  const [isShow, setIsShow] = useState(false)
  const firstRender = useRef(true)

  useBodyScrollLock(isShow)

  const showMenu = () => {
    setIsShow((prev) => !prev)
    firstRender.current = false
  }

  const closeMenu = () => {
    setIsShow((prev) => !prev)
  }

  return (
    <div className={clsx(s.container, className)} {...props}>
      <ButtonLucide icon="MonitorCog" size={20} strokeWidth={1.5} onClick={showMenu} />
      <div
        className={clsx(
          s.wrapper,
          { [s.init]: firstRender.current },
          { [s.show]: isShow },
          { [s.hide]: !isShow && !firstRender.current }
        )}
      >
        <div
          className={clsx(
            s.menu,
            { [s.show]: isShow },
            { [s.hide]: !isShow && !firstRender.current }
          )}
        >
          <ButtonClose className={s.close} onClick={closeMenu} />
          <div className={s.title}>Настройка темы</div>
        </div>
      </div>
    </div>
  )
}
