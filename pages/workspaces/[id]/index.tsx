// pages/workspaces/[id].tsx

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BaseCard from '@/components/BaseCard';
import SideBarLg from '@/components/SideBarLgBase';
import Header from '@/components/HeaderBase';
import Cookies from 'js-cookie';
import { withAuth } from '@/pages/withAuth';

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
interface Workspace {
	id: number;
	name: string;
	description: string;
}
const WorkspaceDetail = () => {
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
		<>
			<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
				<SideBarLg
					workspaceData={baseData}
					id={id}
				/>
				<div className="flex flex-col">
					<Header workspaceData={baseData} />

					<main className="flex flex-1 bg-white flex-col gap-4 p-4 lg:gap-6 lg:p-6">
						<div className="flex items-center">
							<h1 className="text-lg font-semibold md:text-2xl">
								Bases
							</h1>
						</div>
						<div
							className="flex flex-1 bg-white items-start justify-center rounded-lg border border-dashed shadow-sm"
							x-chunk="dashboard-02-chunk-1"
						>
							<div className="flex flex-row flex-wrap items-start">
								{baseData.map(
									(
										base
									) => (
										<BaseCard
											key={
												base.id
											}
											name={
												base.name
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
		</>
	);
};
export default withAuth(WorkspaceDetail);
