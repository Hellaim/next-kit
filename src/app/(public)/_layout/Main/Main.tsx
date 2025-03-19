import { Container } from '@/components/grid'
import s from './Main.module.css'
import clsx from 'clsx'

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  ref?: React.RefObject<HTMLDivElement | null>
}

export function Main({ className, children, ref, ...props }: MainProps) {
  return (
    <main className={clsx(s.main, className)} ref={ref} {...props}>
      <Container>
        <div className={s.inner}>{children}</div>
      </Container>
    </main>
  )
}
