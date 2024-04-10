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
	name: string;
	description: string;
	id: number;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
	name,
	description,
	id,
}) => {
	return (
		<div className=" w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full p-5">
			<Card className="p-5">
				<CardHeader className="p-2 pt-0 md:p-4">
					<CardTitle>{name}</CardTitle>
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
