import { PageTitle } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Компоненты',
  description: 'Набор ui компонентов',
  other: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=60' },
}

export const revalidate = 3600

export default function UiKit() {
  return (
    <>
      <PageTitle>Компоненты</PageTitle>
    </>
  )
}
