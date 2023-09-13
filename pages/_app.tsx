import Layout from '@/components/layout'
import Model from '@/components/model'
import { Toaster } from 'react-hot-toast';
import {SessionProvider} from "next-auth/react"
import LoginModel from '@/components/models/loginModel'
import RegisterModel from '@/components/models/registerModel'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
      <Toaster/>
    <RegisterModel/>
 <LoginModel/>
  <Layout>  <Component {...pageProps} /></Layout>
  </SessionProvider>
  )
}
