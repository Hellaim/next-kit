import s from './ButtonClose.module.css'
import clsx from 'clsx'
import { X } from 'lucide-react'

interface ButtonCloseProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: number
  strokeWidth?: number
}

export function ButtonClose({
  className,
  size = 20,
  strokeWidth = 2,
  ...props
}: ButtonCloseProps) {
  return (
    <button className={clsx(s.close, className)} {...props}>
      <X size={size} strokeWidth={strokeWidth} />
    </button>
  )
}
