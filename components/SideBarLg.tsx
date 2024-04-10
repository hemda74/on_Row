// Sidebar.tsx
import React from 'react';
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

						<Link
							href="/members"
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
								Create Workspace
							</CardTitle>
							<CardDescription>
								Add New
								WorkSpace and
								get unlimited
								access to our
								support team.
							</CardDescription>
						</CardHeader>
						<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
							<Button
								size="sm"
								className="w-full"
							>
								Add New
								WorkSpace
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SideBarLg;
