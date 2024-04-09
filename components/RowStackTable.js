import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Table from 'rowstack';

const data = [
	{
		id: '0', // Convert id to string
		name: 'Uriel Russo',
		email: 'dolor.vitae@icloud.ca',
	},
	{
		id: '1', // Convert id to string
		name: 'Priscilla Whitehead',
		email: 'egestas.aliquam@icloud.ca',
	},
	{
		id: '2', // Convert id to string
		name: 'Mariam Christensen',
		email: 'lectus@google.com',
	},
	{
		id: '3', // Convert id to string
		name: 'Elizabeth Hoffman',
		email: 'tellus.nunc@google.ca',
	},
	{
		id: '4', // Convert id to string
		name: 'Zelda Hess',
		email: 'phasellus.libero.mauris@icloud.ca',
	},
];

const columns = [
	{
		id: 'name',
		name: 'Name',
	},
	{
		id: 'email',
		name: 'Email',
	},
];

const RowStackTable = () => {
	return (
		<div>
			<Tabs defaultValue="all">
				<div className="flex items-center">
					<TabsList>
						{columns.map((column) => (
							<TabsTrigger
								key={column.id}
								value={
									column.id
								}
							>
								{column.name}
							</TabsTrigger>
						))}
					</TabsList>
				</div>
			</Tabs>
			<Table
				data={data}
				columns={columns}
			/>
		</div>
	);
};

export default RowStackTable;
