import Image from 'next/image';
import Link from 'next/link';
import imagebaackground from '../public/login-background-image.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Dashboard() {
	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="hidden bg-muted lg:block">
				<Image
					src={imagebaackground}
					alt="Image"
					width="1920"
					height="1080"
					className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">
							Change Password
						</h1>
						<p className="text-balance text-muted-foreground">
							<span className="text-lg mr-3">
								Hello
							</span>
							ahmedashrafhemdan@gmail.com
						</p>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">
									New
									Password
								</Label>
							</div>
							<Input
								id="password"
								type="password"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">
									Confirm
									New
									Password
								</Label>
							</div>
							<Input
								id="password"
								type="password"
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
						>
							Change Password
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
