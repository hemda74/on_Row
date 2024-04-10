import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

interface WorkspaceCardProps {
	title: string;
	description: string;
	id: string;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
	title,
	description,
	id,
}) => {
	return (
		<div className=" w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full p-5">
			<Card x-chunk="dashboard-02-chunk-0">
				<CardHeader className="p-2 pt-0 md:p-4">
					<CardTitle>{title}</CardTitle>
					<CardDescription>
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
					<Link href={`/workspaces/${id}`}>
						<Button
							size="sm"
							className="w-full"
						>
							Go To WorkSpace
						</Button>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
};

export default WorkspaceCard;
