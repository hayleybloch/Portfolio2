import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App, nextI18NextConfig as any);
