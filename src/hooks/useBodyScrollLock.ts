import { useEffect, useRef } from 'react'

export function useBodyScrollLock(isLocked: boolean) {
  const scrollBarWidth = useRef(0)

  useEffect(() => {
    if (isLocked) {
      scrollBarWidth.current = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollBarWidth.current}px`
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
      document.body.style.paddingRight = '0px'
    }
  }, [isLocked])
}
