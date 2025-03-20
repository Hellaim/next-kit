import s from './PageLoader.module.css'
import { LoaderCircle } from 'lucide-react'

export function PageLoader() {
  return (
    <div className={s.container}>
      <LoaderCircle size={30} className={s.icon} />
    </div>
  )
}
