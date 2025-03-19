import { PageTitle } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Компоненты',
  description: 'Набор ui компонентов',
}

export default function UiKit() {
  return <PageTitle>Компоненты</PageTitle>
}
