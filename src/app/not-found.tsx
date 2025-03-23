import Link from 'next/link'
import s from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.title}>404</div>
        <div className={s.desc}>Страница не найдена</div>
        <Link href="/">Вернуться на главную</Link>
      </div>
    </div>
  )
}
