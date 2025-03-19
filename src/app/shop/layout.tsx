import { App, Header } from '@/app/(public)/_layout'
import { ShopMain, ShopSidebar, ShopContent } from './_layout'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <App>
      <Header />
      <ShopMain>
        <ShopSidebar />
        <ShopContent>{children}</ShopContent>
      </ShopMain>
    </App>
  )
}
