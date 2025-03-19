import { Container } from '@/components/grid'
import s from './Footer.module.css'
import clsx from 'clsx'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  clssName?: string
  ref?: React.RefObject<HTMLDivElement | null>
}

export function Footer({ className, ref, ...props }: FooterProps) {
  return (
    <footer className={clsx(s.footer, className)} ref={ref} {...props}>
      <Container>
        <div className={s.inner}>
          <div>_Next-kit</div>
          <div>@Copyright next-kit</div>
        </div>
      </Container>
    </footer>
  )
}
