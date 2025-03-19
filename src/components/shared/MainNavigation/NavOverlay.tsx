import s from './MainNavigation.module.css'
import clsx from 'clsx'
import { ButtonClose } from '@/components/shared'

interface MenuOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  firstRender: boolean
  onClose: () => void
}

export function NavOverlay({
  className,
  children,
  isOpen,
  onClose,
  firstRender,
  ...props
}: MenuOverlayProps) {
  return (
    <div
      className={clsx(
        s.wrapper,
        className,
        { [s.show]: isOpen },
        { [s.hide]: !isOpen && !firstRender }
      )}
      {...props}
    >
      <ButtonClose size={30} className={s.close} onClick={onClose} />
      <div className={s.inner}>{children}</div>
    </div>
  )
}
