import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	File,
	Home,
	LineChart,
	ListFilter,
	MoreHorizontal,
	Package,
	Package2,
	PanelLeft,
	PlusCircle,
	Search,
	Settings,
	ShoppingCart,
	Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const tableData = [
	{
		avatar: 'CN',
		name: 'Laser Lemonade Machine',
		status: 'Admin',
		totalSales: 25,
		createdAt: '2023-07-12 10:42 AM',
	},
	{
		avatar: 'CN',
		name: 'Hypernova Headphones',
		status: 'User',
		totalSales: 100,
		createdAt: '2023-10-18 03:21 PM',
	},
	{
		avatar: 'CN',
		name: 'AeroGlow Desk Lamp',
		status: 'User',
		totalSales: 50,
		createdAt: '2023-11-29 08:15 AM',
	},
	{
		avatar: 'CN',
		name: 'TechTonic Energy Drink',
		status: 'Admin',
		totalSales: 0,
		createdAt: '2023-12-25 11:59 PM',
	},
	{
		avatar: 'CN',
		name: 'Gamer Gear Pro Controller',
		status: 'User',
		totalSales: 75,
		createdAt: '2024-01-01 12:00 AM',
	},
	{
		avatar: 'CN',
		name: 'Luminous VR Headset',
		status: 'User',
		totalSales: 30,
		createdAt: '2024-02-14 02:14 PM',
	},
];

export default function Dashboard() {
	return (
		<>
			<Table className="w-full">
				<TableHeader>
					<TableRow>
						<TableHead className="hidden w-[100px] sm:table-cell">
							<span className="sr-only">
								Image
							</span>
						</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="hidden md:table-cell">
							Total Sales
						</TableHead>
						<TableHead className="hidden md:table-cell">
							Created at
						</TableHead>
						<TableHead>
							<span className="sr-only">
								Actions
							</span>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tableData.map((item, index) => (
						<TableRow key={index}>
							<TableCell className="hidden sm:table-cell">
								<Avatar>
									<AvatarFallback>
										{
											item.avatar
										}
									</AvatarFallback>
								</Avatar>
							</TableCell>
							<TableCell className="font-medium">
								{item.name}
							</TableCell>
							<TableCell>
								<Badge
									variant={
										item.status ===
										'Admin'
											? 'default'
											: 'outline'
									}
								>
									{
										item.status
									}
								</Badge>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{
									item.totalSales
								}
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{item.createdAt}
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger
										asChild
									>
										<Button
											aria-haspopup="true"
											size="icon"
											variant="ghost"
										>
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">
												Toggle
												menu
											</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>
											Actions
										</DropdownMenuLabel>
										<DropdownMenuItem>
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											Delete{' '}
											{item.status ===
											'Admin'
												? 'User'
												: ''}
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
