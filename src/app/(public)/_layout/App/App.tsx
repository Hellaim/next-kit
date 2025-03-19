import s from './App.module.css'
import clsx from 'clsx'

interface AppProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  ref?: React.RefObject<HTMLDivElement | null>
}

export function App({ className, children, ref, ...props }: AppProps) {
  return (
    <div className={clsx(s.app, className)} {...props}>
      {children}
    </div>
  )
}
