import Link from 'next/link';
import imagebaackground from '../public/login-background-image.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Image from 'next/image';
interface FormData {
	email: string;
	password: string;
}
const Dashboard: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
	});
	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch(
				'https://api.onrowhq.com/api/auth/login',
				{
					method: 'POST',
					headers: {
						'Content-Type':
							'application/json',
					},
					body: JSON.stringify(formData),
				}
			);
			const data = await response.json();
			console.log('Response:', data);
			if (response.status === 200) {
				Cookies.set('token', data.data.token, {
					expires: 1000,
				}); // Store token in cookie for 1000 day
				router.push('/');
				console.log(data.token);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="hidden bg-muted lg:block">
				<Image
					src={imagebaackground}
					alt="Image"
					width="1920"
					height="1080"
					className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
			<div className="flex items-center justify-center py-12 bg-gray-100 min-h-screen">
				<div className="mx-auto bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">
							Login
						</h1>
						<p className="text-gray-600">
							Enter your email below
							to login to your account
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="mt-4"
					>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<label
									htmlFor="email"
									className="font-semibold"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									name="email"
									placeholder="m@example.com"
									value={
										formData.email
									}
									onChange={
										handleInputChange
									}
									required
									className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="font-semibold"
									>
										Password
									</label>
									<a
										href="/forgot-password"
										className="text-sm "
									>
										Forgot
										your
										password?
									</a>
								</div>
								<input
									id="password"
									type="password"
									name="password"
									value={
										formData.password
									}
									onChange={
										handleInputChange
									}
									required
									className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
								/>
							</div>
							<Button
								type="submit"
								className="w-full "
							>
								Login
							</Button>
							{/* <button
								type="button"
								className="w-full bg-gray-200 text-gray-700 rounded-md py-2 px-4 hover:bg-gray-300 transition duration-300 ease-in-out"
							>
								Login with
								Google
							</button> */}
						</div>
					</form>
					<div className="mt-4 text-center text-sm">
						Don't have an account?{' '}
						<Link
							href="/sign-up"
							className=""
						>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
