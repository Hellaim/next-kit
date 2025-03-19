import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Магазин',
  description: 'Пример каталога с корзиной',
}

export default function index() {
  return <h1>Hello index</h1>
}
