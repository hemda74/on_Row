import { withAuth } from '@/pages/withAuth';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package2,
	Search,
	Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import MemberCard from '@/components/MemberCard';
import Header from '@/components/HeaderHome';
interface Workspace {
	id: number;
	name: string;
	description: string;
}
const Dashboard = () => {
	const [workspaceData, setWorkspaceData] = useState<Workspace[]>([]);
	useEffect(() => {
		// Fetch data from the API when the component mounts
		fetch(`https://api.onrowhq.com/api/workspaces`, {
			headers: {
				Authorization: `Bearer ${Cookies.get('token')}`, // Include token in Authorization header
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						'Failed to fetch workspace data'
					);
				}
				return response.json();
			})
			.then((data) => {
				console.log();
				if (
					data &&
					data.data &&
					Array.isArray(data.data.workspaces)
				) {
					setWorkspaceData(data.data.workspaces);
				} else {
					throw new Error('Invalid data format');
				}
			})
			.catch((error) => {
				console.error(
					'Error fetching workspace data:',
					error
				);
			});
	}, []);
	const links = [
		{
			href: '/workspaces/bases/id',
			text: 'Dashboard',
			icon: <Home className="h-4 w-4" />,
		},
		{
			href: '/workspaces/bases/id',
			text: 'All Workspace Bases',

			badge: '5',
		},
		{
			href: '/workspaces/bases/id',
			text: 'Call Center',
		},
		{
			href: '/workspaces/bases/id',
			text: 'Hr',
		},
		{
			href: '/workspaces/id/bases/id',
			text: 'Accounting',
		},
		{
			href: '/workspaces/bases/id',
			text: 'Marketing',
		},
	];
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link
							href="/"
							className="flex items-center gap-2 font-semibold"
						>
							<Package2 className="h-6 w-6" />
							<span className="">
								onRow
							</span>
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
							{/* Render the first link of number of bases  */}
							<Link
								href={
									links[0]
										.href
								}
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />
								{links[0].text}
							</Link>

							{/* Map over the remaining links */}
							{links
								.slice(1)
								.map(
									(
										link,
										index
									) => (
										<Link
											key={
												index
											}
											href={
												link.href
											}
											className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
										>
											<LineChart className="h-4 w-4" />
											{
												link.text
											}
											{link.badge && (
												<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
													{
														link.badge
													}
												</Badge>
											)}
										</Link>
									)
								)}
						</nav>
					</div>
					<div className="mt-auto p-4">
						<Card x-chunk="dashboard-02-chunk-0">
							<CardHeader className="p-2 pt-0 md:p-4">
								<CardTitle>
									Add New
									Base
								</CardTitle>
								<CardDescription>
									Add New
									Base
								</CardDescription>
							</CardHeader>
							<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
								<Button
									size="sm"
									className="w-full"
								>
									Add New
									Base
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<Header workspaceData={workspaceData} />
				<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="flex items-center">
						<h1 className="text-lg font-semibold md:text-2xl">
							Members
						</h1>
					</div>

					<MemberCard />
				</main>
			</div>
		</div>
	);
};
export default withAuth(Dashboard);
