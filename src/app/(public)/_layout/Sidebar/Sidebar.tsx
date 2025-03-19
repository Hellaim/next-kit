import s from './Sidebar.module.css'
import clsx from 'clsx'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  ref?: React.RefObject<HTMLDivElement | null>
}

export function Sidebar({ className, ref, ...props }: SidebarProps) {
  return (
    <aside className={clsx(s.sidebar, className)} ref={ref} {...props}>
      Sidebar
    </aside>
  )
}
