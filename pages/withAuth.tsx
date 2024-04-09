// withAuth.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const withAuth = (WrappedComponent: any) => {
	const Wrapper = (props: any) => {
		const router = useRouter();

		useEffect(() => {
			const token = Cookies.get('token');
			if (!token) {
				router.push('/login'); // Redirect to login page if token is not present
			}
		}, []);

		return <WrappedComponent {...props} />;
	};

	if (WrappedComponent.getInitialProps) {
		Wrapper.getInitialProps = WrappedComponent.getInitialProps;
	}

	return Wrapper;
};
