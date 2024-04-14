// Sidebar.tsx
import React, { useState, ChangeEvent } from 'react';

import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Home, LineChart } from 'lucide-react';
import {
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
import { Textarea } from './ui/textarea';
import BASE_URL from '@/pages/api/BaseUrl';
import Image from 'next/image';
import logo from '@/public/logo.png';
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
	const router = useRouter();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const handlenameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newname = event.target.value;
		setName(newname);
	};
	const handledescChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
					`${BASE_URL}workspaces/1/bases/store`,
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
				window.location.reload();
			} catch (error) {
				console.error('Error creating base:', error);
				toast.error(
					'Failed to create base. Please try again later.'
				);
			}
		}
	};
	const handleDelete = async () => {
		try {
			const response = await fetch(
				`https://api.onrowhq.com/api/workspaces/${id}/destroy`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type':
							'application/json',
						Authorization: `Bearer ${Cookies.get(
							'token'
						)}`, // Include token in Authorization header
					},
				}
			);
			if (response.ok) {
				// Workspace destroyed successfully
				toast.success('Workspace Delteted Succussfuly');
				router.push('/workspaces'); // Redirect to homepage or any other route
				toast.success('Workspace Delteted Succussfuly');
			} else {
				// Handle error response
				console.error('Failed to delete workspace');
			}
		} catch (error) {
			// Handle fetch error
			console.error('Error:', error);
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
						<Image
							src={logo}
							width={70}
							alt={''}
						/>
					</Link>
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
			</div>
		</div>
	);
};

export default SideBarLg;
