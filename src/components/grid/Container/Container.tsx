import s from './Container.module.css'
import clsx from 'clsx'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  ref?: React.RefObject<HTMLDivElement>
}

export function Container({ className, children, ref, ...props }: ContainerProps) {
  return (
    <div className={clsx(s.container, className)} {...props}>
      {children}
    </div>
  )
}
