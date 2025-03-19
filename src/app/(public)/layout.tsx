'use client'
import { App, Footer, Header, Main } from './_layout'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <App>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </App>
  )
}
