import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import imagebaackground from '@/public/login-background-image.jpg';
import Cookies from 'js-cookie'; // Import Cookies library
import { useRouter } from 'next/router';

interface FormData {
	name: '';
	email: string;
	password: string;
	password_confirmation: string;
}

export default function Dashboard() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	});
	const router = useRouter();

	const [error, setError] = useState<string>(''); // Specify type as string
	const [success, setSuccess] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Check if passwords match
		if (formData.password !== formData.password_confirmation) {
			setError('Passwords do not match');
			return;
		}

		try {
			const response = await fetch(
				'https://api.onrowhq.com/api/auth/register',
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
				Cookies.set('token', data.token, {
					expires: 1000,
				}); // Store token in cookie for 1000 day
				setSuccess(true);
				setError('');
				router.push('/');
			} else {
				setSuccess(false);
				setError(
					data.message || 'Something went wrong'
				);
			}
		} catch (error) {
			setError(
				(error as Error).message ||
					'Something went wrong'
			); // Cast error to Error type
			setSuccess(false);
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
							Signup
						</h1>
						<p className="text-gray-600">
							Enter your email below
							to sign up for a new
							account
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="mt-4"
					>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="name">
									Full
									Name
								</Label>
								<Input
									id="name"
									type="text"
									name="name"
									placeholder="Full Name"
									value={
										formData.name
									}
									onChange={
										handleChange
									}
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">
									Email
								</Label>
								<Input
									id="email"
									type="email"
									name="email"
									placeholder="m@example.com"
									value={
										formData.email
									}
									onChange={
										handleChange
									}
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">
									Password
								</Label>
								<Input
									id="password"
									type="password"
									name="password"
									value={
										formData.password
									}
									onChange={
										handleChange
									}
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password_confirmation">
									Confirm
									Password
								</Label>
								<Input
									id="password_confirmation"
									type="password"
									name="password_confirmation"
									value={
										formData.password_confirmation
									}
									onChange={
										handleChange
									}
									required
								/>
							</div>
							{error && (
								<p className="text-red-500">
									{error}
								</p>
							)}
							{success && (
								<p className="text-green-500">
									Registration
									successful!
								</p>
							)}
							<Button
								type="submit"
								className="w-full"
							>
								SignUp
							</Button>
							<Button
								variant="outline"
								className="w-full"
							>
								SignUp with
								Google
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
