import 'style/index.css'
import { AppProps } from 'next/app';
import React from 'react'
import NavMenu from 'components/NavMenu';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <NavMenu><Component {...pageProps} /></NavMenu>
}
