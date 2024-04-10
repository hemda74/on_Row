import WorkspaceCard from '@/components/WorkspaceCard';
import SideBarLg from '@/components/SideBarLg';
import Header from '@/components/Header';
interface Workspace {
	id: number;
	name: string;
	description: string;
}

// Define the interface for an array of workspace items
interface WorkspaceArray {
	workspaceData: Workspace[];
}
export default function Dashboard() {
	const workspaceData: Workspace[] = [
		{
			id: 1,
			name: 'Workspace 1',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 1',
		},
		{
			id: 2,
			name: 'Workspace 2',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 2',
		},
		{
			id: 3,
			name: 'Workspace 3',
			description:
				'Description for Workspace Description for Workspace Description for Workspace Description for Workspace 3',
		},
		{
			id: 4,
			name: 'Workspace 4',
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
							{/* Map over workspaceData array to render WorkspaceCard components */}
							{workspaceData.map(
								(workspace) => (
									<WorkspaceCard
										key={
											workspace.id
										}
										name={
											workspace.name
										}
										description={
											workspace.description
										}
										id={
											workspace.id
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
