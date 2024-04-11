// Sidebar.tsx
import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

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
	id: string | string[] | undefined;
}
const SideBarLg: React.FC<WorkspaceArray> = ({ workspaceData, id }) => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const handlenameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newname = event.target.value;
		setName(newname);
	};
	// handle submit button on creating new base
	const handleSubmit = () => {
		if (1) {
			toast.success('The Mail has been Sent Successfully.');
			console.log('Submitted:', { name, id });
		} else {
			// name is not valid, show error message or handle accordingly
			toast.error('Please enter a valid name address.');
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
							Bases
							<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
								{
									totalWorkspaces
								}
							</Badge>
						</Link>

						<Link
							href="/workspaces/members"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						>
							<Users className="h-4 w-4" />
							Users
						</Link>
					</nav>
				</div>
				<div className="mt-auto p-4">
					<Card x-chunk="dashboard-02-chunk-0">
						<CardHeader className="p-2 pt-0 md:p-4">
							<CardTitle>
								New Base
							</CardTitle>
							<CardDescription>
								Add New Base and
								get unlimited
								access to our
								support team.
							</CardDescription>
						</CardHeader>
						<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
							<AlertDialog>
								<AlertDialogTrigger>
									<p className="bg-primary text-primary-foreground hover:bg-primary/90 p-3 rounded-md">
										Add
										Base
									</p>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Add
											Base
										</AlertDialogTitle>
										<AlertDialogDescription>
											<CardHeader>
												<CardDescription className="text-black font-semibold">
													Enter
													Name
													And
													Description
													For
													WorkSpace
												</CardDescription>
											</CardHeader>
											<CardContent className="grid gap-4">
												<div className="grid gap-2">
													<Label htmlFor="name">
														Workspace
														Name
													</Label>
													<Input
														id="name"
														type="name"
														placeholder="Workspace Name"
														value={
															name
														}
														onChange={
															handlenameChange
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
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SideBarLg;
