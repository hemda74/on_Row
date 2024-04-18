// pages/workspaces/[id]/bases.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BaseCard from '@/components/BaseCard';
import Cookies from 'js-cookie';
import BASE_URL from '@/pages/api/BaseUrl';
import { withAuth } from '@/pages/Auth/withAuth';

interface Base {
	id: number;
	name: string;
	description: string;
	workspace_id: number;
}

export default function BasesPage() {
	const router = useRouter();
	const { id } = router.query;
	const [baseData, setBaseData] = useState<Base[]>([]);

	useEffect(() => {
		// Fetch base data based on the workspace id
		if (id) {
			fetch(`${BASE_URL}workspaces/workspaces/${id}/bases/`, {
				headers: {
					Authorization: `Bearer ${Cookies.get(
						'token'
					)}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					// Assuming data contains an array of bases
					console.log(data);
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
	const baseid = id;
	return (
		<div>
			{/* Render base cards using baseData */}
			{baseData.map((base) => (
				<BaseCard
					key={base.id}
					name={base.name}
					description={base.description}
					id={base.id}
					workspace_id={base.workspace_id}
				/>
			))}
		</div>
	);
}
