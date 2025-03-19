'use client'

import s from './ThemeToggle.module.css'
import clsx from 'clsx'
import { useLayoutEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  ref?: React.RefObject<HTMLButtonElement | null>
}

export const ThemeToggle = ({ className, ref, ...props }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<string | null>(null)

  // Применяем тему до первого рендера
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.className = savedTheme // Добавляем тему к document.documentElement
  }, [])

  const toggle = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      document.documentElement.className = newTheme
      return newTheme
    })
  }

  if (theme === null) {
    return null // Пока не знаем тему, ничего не рендерим
  }

  return (
    <button className={clsx(s.button, className)} onClick={toggle} ref={ref} {...props}>
      {theme === 'dark' && <Moon size={20} strokeWidth={1.5} />}
      {theme === 'light' && <Sun size={20} strokeWidth={1.5} />}
    </button>
  )
}
