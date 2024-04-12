// Sidebar.tsx
import React, { useState, ChangeEvent } from 'react';

import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Bell, Package2, Home, Users, LineChart } from 'lucide-react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import Link from 'next/link';
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
import { Badge } from '@/components/ui/badge';
// Define the interface for a workspace item
interface Workspace {
	id: number;
	name: string;
}

// Define the interface for an array of workspace items
interface WorkspaceArray {
	workspaceData: Workspace[];
}
const SideBarLg: React.FC<WorkspaceArray> = ({ workspaceData }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const handlenameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newname = event.target.value;
		setName(newname);
	};
	const handledescChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newdesc = event.target.value;
		const descElement = document.getElementById('desc');
		const descErrorMessageElement =
			document.getElementById('descErrorMessage');

		// Check if the elements exist before attempting to access their properties
		if (descElement && descErrorMessageElement) {
			descErrorMessageElement.innerText =
				'Description must be at least 100 characters long';
		}

		setDescription(newdesc);
	};
	// handle submit button on creating new base
	// const handleSubmit = () => {
	// 	if (name.length < 1) {
	// 		toast.error('You Must Enter Base Name.');
	// 	} else {
	// 		if (desc.length < 100) {
	// 			// name is not valid, show error message or handle accordingly
	// 			toast.error(
	// 				'Description must be at least 100 characters long.'
	// 			);
	// 		} else {
	// 			toast.success('New Base Created Successfully.');
	// 			console.log('Submitted:', { name, desc, id });
	// 		}
	// 	}
	// };
	const handleSubmit = async () => {
		if (name.length < 1) {
			toast.error('You Must Enter Base Name.');
		} else if (description.length < 100) {
			toast.error(
				'Description must be at least 100 characters long.'
			);
		} else {
			try {
				const token = Cookies.get('token');
				if (!token) throw new Error('Token not found');

				const response = await fetch(
					`https://api.onrowhq.com/api/workspaces/1/bases/store`,
					{
						method: 'POST',
						headers: {
							'Content-Type':
								'application/json',
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify({
							name,
							description,
						}),
					}
				);

				if (!response.ok) {
					throw new Error(
						'Failed to create base'
					);
				}

				toast.success('New Base Created Successfully.');
			} catch (error) {
				console.error('Error creating base:', error);
				toast.error(
					'Failed to create base. Please try again later.'
				);
			}
		}
	};
	const totalWorkspaces = workspaceData.length;
	return (
		<div className="hidden border-r bg-muted/40 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link
						href="/"
						className="flex items-center gap-2 font-semibold"
					>
						<Package2 className="h-6 w-6" />
						<span className="">onRow</span>
					</Link>
					<Button
						variant="outline"
						size="icon"
						className="ml-auto h-8 w-8"
					>
						<Bell className="h-4 w-4" />
						<span className="sr-only">
							Toggle Menu
						</span>
					</Button>
				</div>
				<div className="flex-1 bg-white">
					<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
						<Link
							href="/"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						>
							<Home className="h-4 w-4" />
							Dashboard
						</Link>
						<Link
							href="#"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						>
							<LineChart className="h-4 w-4" />{' '}
							WorkSpaces
							<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
								{
									totalWorkspaces
								}
							</Badge>
						</Link>
					</nav>
				</div>
				<div className="mt-auto p-4">
					<CardHeader className="p-2 pt-0 md:p-4">
						<CardTitle>
							New Workspace
						</CardTitle>
						<CardDescription>
							Add New Workspace
						</CardDescription>
					</CardHeader>
					<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
						<AlertDialog>
							<AlertDialogTrigger>
								<div className="bg-primary text-primary-foreground hover:bg-primary/90 p-3 rounded-md">
									Add Base
								</div>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Add
										Base
									</AlertDialogTitle>
									<AlertDialogDescription>
										<CardContent className="grid gap-4">
											<div className="grid gap-2">
												<Label htmlFor="name">
													Base
													Name
												</Label>
												<Input
													id="name"
													type="name"
													placeholder="Name...."
													value={
														name
													}
													onChange={
														handlenameChange
													}
													required
												/>
											</div>
											<div className="grid gap-2">
												<Label htmlFor="desc">
													Base
													Description
												</Label>
												<Input
													id="desc"
													type="text"
													placeholder="Description...."
													value={
														description
													}
													onChange={
														handledescChange
													}
													required
												/>
												<div id="descErrorMessage"></div>
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
									>
										Submit
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</CardContent>
				</div>
			</div>
		</div>
	);
};

export default SideBarLg;
