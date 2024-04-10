import BaseCard from '@/components/BaseCard';
import SideBarLg from '@/components/SideBarLgBase';
import Header from '@/components/Header';
interface Workspace {
	id: string;
	title: string;
	description: string;
}
interface Base {
	id: string;
	title: string;
	description: string;
}
// Define the interface for an array of workspace items
interface WorkspaceArray {
	workspaceData: Workspace[];
}
// Define the interface for an array of workspace items
interface BaseArray {
	workspaceData: Base[];
}
export default function Dashboard() {
	const workspaceData: Workspace[] = [
		{
			id: '1',
			title: 'Workspace 1',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 1',
		},
		{
			id: '2',
			title: 'Workspace 2',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 2',
		},
		{
			id: '3',
			title: 'Workspace 3',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 3',
		},
		{
			id: '4',
			title: 'Workspace 4',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 4',
		},
	];
	const baseData: Base[] = [
		{
			id: '1',
			title: 'base 1',
			description:
				'Description for base Description for base Description for base Description for base 1',
		},
		{
			id: '2',
			title: 'base 2',
			description:
				'Description for base Description for base Description for base Description for base 2',
		},
		{
			id: '3',
			title: 'base 3',
			description:
				'Description for base Description for base Description for base Description for base 3',
		},
		{
			id: '4',
			title: 'Workspace 4',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 4',
		},
	];
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<SideBarLg workspaceData={workspaceData} />
			<div className="flex flex-col">
				<Header workspaceData={workspaceData} />
				<main className="flex flex-1 bg-white flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="flex items-center">
						<h1 className="text-lg font-semibold md:text-2xl">
							Workspaces
						</h1>
					</div>
					<div
						className="flex flex-1 bg-white items-start justify-center rounded-lg border border-dashed shadow-sm"
						x-chunk="dashboard-02-chunk-1"
					>
						<div className="flex flex-row flex-wrap items-start">
							{/* Map over workspaceData array to render BaseCard components */}
							{baseData.map(
								(base) => (
									<BaseCard
										key={
											base.id
										}
										title={
											base.title
										}
										description={
											base.description
										}
										id={
											base.id
										}
									/>
								)
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
