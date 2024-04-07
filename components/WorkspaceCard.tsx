import React from 'react';
import Link from 'next/link';
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

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
const WorkspaceCard = () => {
	return (
		<>
			<div className=" w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full p-5">
				<Card x-chunk="dashboard-02-chunk-0">
					<CardHeader className="p-2 pt-0 md:p-4">
						<CardTitle>
							Accounting
						</CardTitle>
						<CardDescription>
							Add New WorkSpace and
							get unlimited access to
							our support team.
						</CardDescription>
					</CardHeader>
					<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
						<Button
							size="sm"
							className="w-full"
						>
							Go To WorkSpace
						</Button>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default WorkspaceCard;
