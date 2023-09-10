import Layout from '@/components/layout'
import Model from '@/components/model'
import LoginModel from '@/components/models/loginModel'
import RegisterModel from '@/components/models/registerModel'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <RegisterModel/>
 <LoginModel/>
  <Layout>  <Component {...pageProps} /></Layout>
  </>
  )
}
