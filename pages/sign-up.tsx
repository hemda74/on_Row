import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormData {
	name: '';
	email: string;
	password: string;
	confirmPassword: string;
}

export default function Dashboard() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState<string>(''); // Specify type as string
	const [success, setSuccess] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Check if passwords match
		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		try {
			const response = await fetch(
				'https://app.onrowhq.com/api/auth/register',
				{
					method: 'POST',
					headers: {
						'Content-Type':
							'application/json',
					},
					body: JSON.stringify({
						email: formData.email,
						password: formData.password,
					}),
				}
			);
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(
					errorData.message ||
						'Something went wrong'
				);
			}
			setSuccess(true);
			setError('');
			// You may want to redirect the user or perform other actions upon successful registration
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
			{/* Your background image div */}
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">
							Signup
						</h1>
						<p className="text-balance text-muted-foreground">
							Enter your email below
							to sign up for a new
							account
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="name">
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
								<Label htmlFor="confirmPassword">
									Confirm
									Password
								</Label>
								<Input
									id="confirmPassword"
									type="password"
									name="confirmPassword"
									value={
										formData.confirmPassword
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
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
