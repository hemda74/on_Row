import React, { useState, ChangeEvent } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
const BaseCard = () => {
	const [email, setEmail] = useState('');

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		console.log('Email:', newEmail);
	};
	return (
		<>
			<div className=" w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full p-5">
				<Card x-chunk="dashboard-02-chunk-0">
					<CardHeader className="p-2 pt-0 md:p-4">
						<CardTitle>Base 1</CardTitle>
						<CardDescription>
							this is a base
							description for a
							workspace
						</CardDescription>
					</CardHeader>
					<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
						<Button
							size="sm"
							className="w-4/9 me-2"
						>
							Open Base
						</Button>

						<AlertDialog>
							<AlertDialogTrigger>
								<p className=" hover:bg-accent hover:text-accent-foreground  border h-9 w-24 pt-1 rounded-md px-6">
									Share
								</p>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Share
										Base
									</AlertDialogTitle>
									<AlertDialogDescription>
										<CardHeader>
											<CardDescription className="text-black font-semibold">
												Enter
												Email
												To
												Share
												Base
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
												/>
											</div>
										</CardContent>
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>
										Cancel
									</AlertDialogCancel>
									<AlertDialogAction>
										Continue
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default BaseCard;
