import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '_next-kit',
}

export default function Home() {
  return (
    <>
      <h1>Главная страница</h1>
    </>
  )
}
