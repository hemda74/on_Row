// pages/workspaces/[id]/bases.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BaseCard from '@/components/BaseCard';
import Cookies from 'js-cookie';
interface Base {
	id: number;
	name: string;
	description: string;
}

export default function BasesPage() {
	const router = useRouter();
	const { id } = router.query;
	const [baseData, setBaseData] = useState<Base[]>([]);

	useEffect(() => {
		// Fetch base data based on the workspace id
		if (id) {
			fetch(
				`https://api.onrowhq.com/api/workspaces/workspaces/${id}/bases/`,
				{
					headers: {
						Authorization: `Bearer ${Cookies.get(
							'token'
						)}`,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					// Assuming data contains an array of bases
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
		<div>
			{/* Render base cards using baseData */}
			{baseData.map((base) => (
				<BaseCard
					key={base.id}
					name={base.name}
					description={base.description}
					id={base.id}
				/>
			))}
		</div>
	);
}
