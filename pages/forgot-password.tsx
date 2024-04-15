import Image from 'next/image';
import Link from 'next/link';
import imagebaackground from '../public/login-background-image.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { withAuth } from '@/pages/Auth/withAuth';

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
							Forget Password
						</h1>
						<p className="text-balance text-muted-foreground">
							Enter your email below
							to setup new password
						</p>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">
								Email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
						>
							Send Email
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
