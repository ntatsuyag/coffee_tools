import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import '@mantine/core/styles.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="light">
      <Component {...pageProps} />
    </MantineProvider>
  )
}
