import s from './PageTitile.module.css'
import clsx from 'clsx'

interface PageTitileProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
  ref?: React.RefObject<HTMLDivElement | null>
}

export function PageTitle({ className, children, ref, ...props }: PageTitileProps) {
  return (
    <div className={clsx(s.title, className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
