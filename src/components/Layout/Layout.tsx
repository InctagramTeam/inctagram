import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/components/ui/header/header'
import { cn } from '@/utils/merge-cn'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={cn(`pt-header-height w-full`, inter.variable)}>{children}</main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
