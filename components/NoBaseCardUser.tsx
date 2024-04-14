import toast from 'react-hot-toast';
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import BASE_URL from '@/pages/api/BaseUrl';
import noworkspace from '@/public/no-workspace.svg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Image from 'next/image';
const NoWokSpaceCard = () => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const handlenameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newname = event.target.value;
		setName(newname);
	};
	const handledescChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const newdesc = event.target.value;
		const descElement = document.getElementById('desc');
		const descErrorMessageElement =
			document.getElementById('descErrorMessage');

		// Check if the elements exist before attempting to access their properties
		if (descElement && descErrorMessageElement) {
			descErrorMessageElement.innerText =
				'Description must be at least 100 characters long';
		}

		setDescription(newdesc);
	};
	const handleSubmit = async () => {
		if (name.length < 1) {
			toast.error('You Must Enter Base Name.');
		} else if (description.length < 100) {
			toast.error(
				'Description must be at least 100 characters long.'
			);
		} else {
			try {
				const token = Cookies.get('token');
				if (!token) throw new Error('Token not found');

				const response = await fetch(
					`${BASE_URL}workspaces/1/bases/store`,
					{
						method: 'POST',
						headers: {
							'Content-Type':
								'application/json',
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify({
							name,
							description,
						}),
					}
				);

				if (!response.ok) {
					throw new Error(
						'Failed to create base'
					);
				}

				toast.success('New Base Created Successfully.');
			} catch (error) {
				console.error('Error creating base:', error);
				toast.error(
					'Failed to create base. Please try again later.'
				);
			}
		}
	};
	return (
		<div className="flex flex-col ">
			<span className="text-center text-xl font-bold mb-5   md:text-2xl">
				You Don't any Bases yet
			</span>
			<Image
				src={noworkspace}
				width={650}
				height={650}
				alt="noworkspace iamge"
			/>
			<div className=" self-end content-end   p-4"></div>
		</div>
	);
};

export default NoWokSpaceCard;
