import React, { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'react-hot-toast';
interface WorkspaceCardProps {
	name: string;
	description: string;
	id: number;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
	name,
	description,
	id,
}) => {
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState(true);

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		setIsValidEmail(validateEmail(newEmail));
	};

	const handleSubmit = () => {
		if (isValidEmail) {
			toast.success('The Mail has been Sent Successfully.');
			console.log('Submitted:', { email, id });
		} else {
			// Email is not valid, show error message or handle accordingly
			toast.error('Please enter a valid email address.');
		}
	};

	const validateEmail = (email: string): boolean => {
		// Basic email validation logic
		return /\S+@\S+\.\S+/.test(email);
	};

	return (
		<div className="w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full p-3 flex flex-row flex-wrap items-start">
			<Card className="p-5 w-full min-h-32">
				<CardHeader className="p-2 pt-0 md:p-4">
					<CardTitle>{name}</CardTitle>
					<CardDescription>
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
					<Link href={`/workspaces/${id}`}>
						<Button
							size="sm"
							className="w-full"
						>
							Open Workspace
						</Button>
					</Link>
					<AlertDialog>
						<AlertDialogTrigger>
							<p className="hover:bg-accent hover:text-accent-foreground bg-gray-300  border h-9 w-24 pt-1 rounded-md px-6">
								Share
							</p>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Share
									WorkSpace
								</AlertDialogTitle>
								<AlertDialogDescription>
									<CardHeader>
										<CardDescription className="text-black font-semibold">
											Enter
											Email
											To
											Share
											Workspace
											With
										</CardDescription>
									</CardHeader>
									<CardContent className="grid gap-4">
										<div className="grid gap-2">
											<Label htmlFor="email">
												Email
											</Label>
											<Input
												id="email"
												type="email"
												placeholder="m@example.com"
												value={
													email
												}
												onChange={
													handleEmailChange
												}
												required
												className={
													!isValidEmail
														? ''
														: ''
												}
											/>
										</div>
									</CardContent>
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>
									Cancel
								</AlertDialogCancel>
								<AlertDialogAction
									onClick={
										handleSubmit
									}
									disabled={
										!isValidEmail
									}
								>
									Submit
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</CardContent>
			</Card>
		</div>
	);
};

export default WorkspaceCard;
