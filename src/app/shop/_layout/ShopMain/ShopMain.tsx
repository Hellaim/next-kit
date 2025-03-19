import s from './ShopMain.module.css'
import clsx from 'clsx'

interface ShopMainProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function ShopMain({ className, children, ...props }: ShopMainProps) {
  return (
    <div className={clsx(s.main, className)} {...props}>
      {children}
    </div>
  )
}
