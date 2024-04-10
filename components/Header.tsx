// Header.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CircleUser, Home, LineChart, Menu, Search, Users } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
// Define the interface for a workspace item
interface Workspace {
	id: string;
	title: string;
}

// Define the interface for an array of workspace items
interface WorkspaceArray {
	workspaceData: Workspace[];
}
const Header: React.FC<WorkspaceArray> = ({ workspaceData }) => {
	const totalWorkspaces = workspaceData.length;
	return (
		<header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="shrink-0 md:hidden"
					>
						<Menu className="h-5 w-5" />
						<span className="sr-only">
							Toggle navigation menu
						</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="flex flex-col"
				>
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
					<div className="mt-auto">
						<Card>
							<CardHeader>
								<CardTitle>
									Upgrade
									to Pro
								</CardTitle>
								<CardDescription>
									Unlock
									all
									features
									and get
									unlimited
									access
									to our
									support
									team.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									size="sm"
									className="w-full"
								>
									Upgrade
								</Button>
							</CardContent>
						</Card>
					</div>
				</SheetContent>
			</Sheet>
			<div className="w-full flex-1 bg-white">
				<form>
					<div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search workspace..."
							className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
						/>
					</div>
				</form>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="secondary"
						size="icon"
						className="rounded-full"
					>
						<CircleUser className="h-5 w-5" />
						<span className="sr-only">
							Toggle user menu
						</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>
						My Account
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Settings
					</DropdownMenuItem>
					<DropdownMenuItem>
						Support
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Header;
