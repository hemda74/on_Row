import React, { useState, useEffect } from 'react';
import WorkspaceCard from '@/components/WorkspaceCard';
import SideBarLg from '@/components/SideBarLgMember';
import Header from '@/components/HeaderMember';
import Cookies from 'js-cookie';
import BASE_URL from '../api/BaseUrl';
import { withAuth } from '../withAuth';
import { useRouter } from 'next/router';
import NoWokSpaceCard from '@/components/NoWokSpaceCard';
import BaseCard from '@/components/BaseCard';
import NoBaseCard from '@/components/NoBaseCardUser';
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
interface MemberInfo {
	name: string;
	email: string;
}
const UserAccount: React.FC<MemberInfo> = () => {
	const [workspaceData, setWorkspaceData] = useState<Workspace[]>([]);
	const [baseData, setBaseData] = useState<Base[]>([]);

	const router = useRouter();
	const { id, name, email } = router.query;
	useEffect(() => {
		// Fetch data from the API when the component mounts
		fetch(`${BASE_URL}workspaces`, {
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
			<SideBarLg
				workspaceData={workspaceData}
				id={id}
			/>
			<div className="flex flex-col">
				<Header workspaceData={workspaceData} />
				<div className="  flex flex-col flex-wrap ">
					<main className="flex flex-1 md:w-full sm:w-full xs:w-full lg:w-full bg-white flex-col gap-4 p-4 lg:gap-6 lg:p-6">
						<div className="flex items-center">
							<h1 className="text-lg  font-semibold md:text-2xl block">
								welcome {name}{' '}
								<br />
								Workspaces
							</h1>
							<h1 className="text-lg font-semibold md:text-2xl block"></h1>
						</div>
						<div
							className="flex flex-1 bg-white items-start justify-center rounded-lg shadow-sm"
							x-chunk="dashboard-02-chunk-1"
						>
							<div className="flex flex-row flex-wrap items-start">
								{/* Check if workspaceData length is 0 */}
								{workspaceData.length ===
								0 ? (
									// If workspaceData is empty, display "No data yet" message
									<NoWokSpaceCard />
								) : (
									// If workspaceData is not empty, map over the array and render WorkspaceCard components
									workspaceData.map(
										(
											workspace
										) => (
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
									)
								)}
							</div>
						</div>
					</main>
					<main className="flex flex-1 md:w-full sm:w-full xs:w-full lg:w-full bg-white flex-col gap-4 p-4 lg:gap-6 lg:p-6">
						<div className="flex items-center">
							<h1 className="text-lg font-semibold md:text-2xl">
								Bases Shared
								With Me
							</h1>
						</div>
						<div
							className="flex flex-1 bg-white items-start justify-center rounded-lg shadow-sm"
							x-chunk="dashboard-02-chunk-1"
						>
							<div className="flex flex-row flex-wrap items-start">
								{baseData.length ===
								0 ? (
									// If workspaceData is empty
									<NoBaseCard />
								) : (
									baseData.map(
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
									)
								)}
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};
export default withAuth(UserAccount);
