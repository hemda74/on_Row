import { ToastProvider } from '@/providers/toast-provider';
import '../styles/rowstckstyles.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ToastProvider />
			<Component {...pageProps} />;
		</>
	);
}
