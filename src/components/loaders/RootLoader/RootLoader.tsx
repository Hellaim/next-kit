import s from './RootLoader.module.css'
import { LoaderCircle } from 'lucide-react'

export function RootLoader() {
  return (
    <div className={s.container}>
      <LoaderCircle size={50} className={s.icon} />
      <div className={s.text}>Загрузка</div>
    </div>
  )
}
