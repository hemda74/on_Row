import { withAuth } from '@/pages/Auth/withAuth';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import MemberCard from '@/components/MemberCard';
import SideBarLg from '@/components/SideBarLgHome';
import Header from '@/components/HeaderHome';
import { useRouter } from 'next/router';
import BASE_URL from '@/pages/api/BaseUrl';

interface Workspace {
	id: number;
	name: string;
	description: string;
}

interface Member {
	id: number;
	name: string;
	email: string;
	created_at: string;
	isAdmin: boolean;
}

const Dashboard = () => {
	const router = useRouter();
	const { id } = router.query;
	const [workspaceData, setWorkspaceData] = useState<Workspace[]>([]);
	const [memberData, setMemberData] = useState<Member[]>([]);

	useEffect(() => {
		fetch(`${BASE_URL}workspaces/${id}/members`, {
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
				if (
					data &&
					data.data &&
					Array.isArray(data.data.users)
				) {
					setMemberData(data.data.users);
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
				<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="flex items-center">
						<h1 className="text-lg font-semibold md:text-2xl">
							Workspace Members
						</h1>
					</div>
					{memberData.map((member) => (
						<MemberCard
							key={member.id}
							name={member.name}
							email={member.email}
							created_at={
								member.created_at
							}
							isAdmin={false}
							id={member.id}
						/>
					))}
				</main>
			</div>
		</div>
	);
};

export default withAuth(Dashboard);
