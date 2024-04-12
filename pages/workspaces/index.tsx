import React, { useState, useEffect } from 'react';
import WorkspaceCard from '@/components/WorkspaceCard';
import SideBarLg from '@/components/SideBarLgHome';
import Header from '@/components/HeaderHome';
import Cookies from 'js-cookie';
import { withAuth } from '../withAuth';
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
						className="flex flex-1 bg-white items-start justify-center rounded-lg shadow-sm"
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
};
export default withAuth(Dashboard);
