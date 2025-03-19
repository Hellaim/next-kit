import s from './Header.module.css'
import clsx from 'clsx'
import { Container } from '@/components/grid'
import {
  MainNavigation,
  ThemeToggle,
  ButtonLucide,
  AppConfigMenu,
} from '@/components/shared'
import Link from 'next/link'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  ref?: React.RefObject<HTMLDivElement | null>
}

export function Header({ className, ref, ...props }: HeaderProps) {
  return (
    <header className={clsx(s.header, className)} {...props}>
      <Container>
        <div ref={ref} className={s.inner}>
          <div className={s.logo}>
            <Link href="/">
              <span>_</span>next-kit
            </Link>
          </div>
          <MainNavigation className={s['ml-auto']} />
          <AppConfigMenu />
          <ThemeToggle />
          <ButtonLucide
            variant="link"
            href="http://vk.com"
            target="_blank"
            icon="Github"
            size={20}
            strokeWidth={1.5}
          />
        </div>
      </Container>
    </header>
  )
}
