import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
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
interface MemberCardProps {
	name: string;
	email: string;
	id: number;
	created_at: string;
	isAdmin: boolean;
}
const tableData = [
	{
		avatar: 'CN',
		name: 'Laser Lemonade Machine',
		status: 'Admin',
		email: '',
		created_at: '2023-07-12 10:42 AM',
	},
	{
		avatar: 'CN',
		name: 'Hypernova Headphones',
		status: 'User',
		email: '',
		created_at: '2023-10-18 03:21 PM',
	},

	{
		avatar: 'CN',
		name: 'TechTonic Energy Drink',
		status: 'Admin',
		email: '',
		created_at: '2023-12-25 11:59 PM',
	},
	{
		avatar: 'CN',
		name: 'Gamer Gear Pro Controller',
		status: 'User',
		email: '',
		created_at: '2024-01-01 12:00 AM',
	},
	{
		avatar: 'CN',
		name: 'Luminous VR Headset',
		status: 'User',
		email: '',
		created_at: '2024-02-14 02:14 PM',
	},
];

const MemberCard: React.FC<MemberCardProps> = ({
	id,
	name,
	email,
	created_at,
}) => {
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
							Email
						</TableHead>
						<TableHead className="hidden md:table-cell">
							Entered at
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
							<TableCell className="hidden sm:table-cell"></TableCell>
							<TableCell className="font-medium">
								{name}
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
								{email}
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{created_at}
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
											Set
											As
											Admin
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
};
export default MemberCard;
