import React from 'react';
import Dashboard from '@/pages/workspaces/index';
import { withAuth } from '@/pages/Auth/withAuth';

const index = () => {
	return (
		<>
			<Dashboard />
		</>
	);
};

export default withAuth(index);
