import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'semantic-ui-css/semantic.min.css'
import GlobalStyle from '@/globalStyle'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Cadastro Lutti</title>
				<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
