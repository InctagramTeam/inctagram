import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'
import * as React from 'react'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
