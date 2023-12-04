
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'




import Head from 'next/head'
import Script from 'next/script'
import { NextPageWithLayout } from './page'
import Destination from './destinations'

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
 
  return (
    <Destination />
  )
}

export default MyApp
