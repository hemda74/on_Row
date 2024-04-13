import { ToastProvider } from '@/providers/toast-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>onRow</title>
			</Head>
			<ToastProvider />
			<Component {...pageProps} />;
		</>
	);
}
