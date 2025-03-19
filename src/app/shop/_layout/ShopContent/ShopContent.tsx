import s from './ShopContent.module.css'
import clsx from 'clsx'

interface ShopContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function ShopContent({ className, children, ...props }: ShopContentProps) {
  return (
    <div className={clsx(s.content, className)} {...props}>
      {children}
    </div>
  )
}
