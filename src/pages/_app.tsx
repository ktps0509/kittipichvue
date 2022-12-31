import '@styles/globals.css'
import '@styles/scss/styles.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Provider } from "react-redux";
import type { AppProps } from 'next/app'
import { store } from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	</>
}

export default MyApp
