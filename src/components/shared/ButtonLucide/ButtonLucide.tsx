import { LucideIcon, icons } from 'lucide-react'
import s from './ButtonLucide.module.css'
import clsx from 'clsx'

interface BaseProps {
  className?: string
  icon: keyof typeof icons
  size?: number
  strokeWidth?: number
  variant?: 'button' | 'link'
}

interface ButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'button'
  buttonRef?: React.Ref<HTMLButtonElement>
}

interface LinkProps extends BaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: 'link'
  linkRef?: React.Ref<HTMLAnchorElement>
}

type ButtonLucideProps = ButtonProps | LinkProps

export function ButtonLucide({
  className,
  children,
  icon,
  variant = 'button',
  size,
  strokeWidth,
  ...props
}: ButtonLucideProps) {
  const IconComponent: LucideIcon = icons[icon]

  if (variant === 'button') {
    const { buttonRef, ...buttonProps } = props as ButtonProps
    return (
      <button className={clsx(s.button, className)} ref={buttonRef} {...buttonProps}>
        {IconComponent && <IconComponent size={size} strokeWidth={strokeWidth} />}
        {children && <span>{children}</span>}
      </button>
    )
  }

  const { linkRef, ...linkProps } = props as LinkProps
  return (
    <a className={clsx(s.link, className)} ref={linkRef} {...linkProps}>
      {IconComponent && <IconComponent size={size} strokeWidth={strokeWidth} />}
      {children && <span>{children}</span>}
    </a>
  )
}
