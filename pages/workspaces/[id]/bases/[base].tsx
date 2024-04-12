import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BaseCard from '@/components/BaseCard';
import SideBarLg from '@/components/SideBarLgBase';
import Header from '@/components/HeaderBase';
import Cookies from 'js-cookie';
import { withAuth } from '@/pages/withAuth';
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	Search,
	ShoppingCart,
	Users,
} from 'lucide-react';
import RowStackTable from '@/components/RowStackTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
interface Workspace {
	id: number;
	name: string;
	description: string;
}

interface Base {
	id: number;
	name: string;
	description: string;
}

export default function Dashboard() {
	const [baseData, setBaseData] = useState<Base[]>([]);
	const [workspaceData, setWorkspaceData] = useState<Workspace[]>([]);

	const router = useRouter();
	const { id } = router.query;

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

	// fetch bases data
	useEffect(() => {
		if (id) {
			fetch(
				`https://api.onrowhq.com/api/workspaces/${id}/bases/`,
				{
					headers: {
						Authorization: `Bearer ${Cookies.get(
							'token'
						)}`,
					},
				}
			)
				.then((response) => {
					if (!response.ok) {
						throw new Error(
							'Failed to fetch base data'
						);
					}
					return response.json();
				})
				.then((data) => {
					setBaseData(data);
				})
				.catch((error) => {
					console.error(
						'Error fetching base data:',
						error
					);
				});
		}
	}, [id]);

	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<SideBarLg
				workspaceData={baseData}
				id={id}
			/>
			<div className="flex flex-col">
				<Header
					workspaceData={baseData}
					id={id}
				/>
				<main className="flex flex-1 bg-white  flex-col ">
					<RowStackTable />
				</main>
			</div>
		</div>
	);
}
