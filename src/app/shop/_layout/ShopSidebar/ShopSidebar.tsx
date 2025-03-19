import s from './ShopSidebar.module.css'
import clsx from 'clsx'

interface ShopSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function ShopSidebar({ className }: ShopSidebarProps) {
  return (
    <div className={clsx(s.sidebar, className)}>
      <h2>sidebar</h2>
    </div>
  )
}
