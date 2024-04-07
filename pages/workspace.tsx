import Link from 'next/link';
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	Search,
	ShoppingCart,
	Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Dashboard() {
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link
							href="/"
							className="flex items-center gap-2 font-semibold"
						>
							<Package2 className="h-6 w-6" />
							<span className="">
								onRow
							</span>
						</Link>
						<Button
							variant="outline"
							size="icon"
							className="ml-auto h-8 w-8"
						>
							<Bell className="h-4 w-4" />
							<span className="sr-only">
								Toggle Menu
							</span>
						</Button>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Home className="h-4 w-4" />
								Dashboard
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />{' '}
								All Workspace
								Bases
								<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
									5
								</Badge>
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />{' '}
								Call Center
								Workspace
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />{' '}
								Development
								Workspace
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />{' '}
								Hr Workspace
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />{' '}
								Accounting
								Workspace
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<LineChart className="h-4 w-4" />{' '}
								Markting
								Workspace
							</Link>
						</nav>
					</div>
					<div className="mt-auto p-4">
						<Card x-chunk="dashboard-02-chunk-0">
							<CardHeader className="p-2 pt-0 md:p-4">
								<CardTitle>
									Add New
									Base
								</CardTitle>
								<CardDescription>
									Add New
									Base
								</CardDescription>
							</CardHeader>
							<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
								<Button
									size="sm"
									className="w-full"
								>
									Add New
									Base
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 md:hidden"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">
									Toggle
									navigation
									menu
								</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="flex flex-col"
						>
							<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
								<Link
									href="#"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
								>
									<Home className="h-4 w-4" />
									Dashboard
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
								>
									<LineChart className="h-4 w-4" />{' '}
									All
									Workspace
									Bases
									<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
										5
									</Badge>
								</Link>
							</nav>
							<div className="mt-auto p-4">
								<Card x-chunk="dashboard-02-chunk-0">
									<CardHeader className="p-2 pt-0 md:p-4">
										<CardTitle>
											Add
											New
											Base
										</CardTitle>
										<CardDescription>
											Add
											New
											Base
										</CardDescription>
									</CardHeader>
									<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
										<Button
											size="sm"
											className="w-1/2"
										>
											Add
											New
											Base
										</Button>
									</CardContent>
								</Card>
							</div>
						</SheetContent>
					</Sheet>
					<div className="w-full flex-1">
						<form>
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search Base..."
									className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/4"
								/>
							</div>
						</form>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="secondary"
								size="icon"
								className="rounded-full"
							>
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">
									Toggle
									user
									menu
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>
								My Account
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								Settings
							</DropdownMenuItem>
							<DropdownMenuItem>
								Support
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="flex items-center">
						<h1 className="text-lg font-semibold md:text-2xl">
							Workspaces
						</h1>
					</div>
					<div
						className="flex flex-1 items-start justify-center rounded-lg border border-dashed shadow-sm"
						x-chunk="dashboard-02-chunk-1"
					>
						<div className="flex flex-row flex-wrap items-start">
							<div className=" w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full p-5">
								<Card x-chunk="dashboard-02-chunk-0">
									<CardHeader className="p-2 pt-0 md:p-4">
										<CardTitle>
											Base
											1
										</CardTitle>
										<CardDescription>
											this
											is
											a
											base
											description
											for
											a
											workspace
										</CardDescription>
									</CardHeader>
									<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
										<Button
											size="sm"
											className="w-4/9 me-2"
										>
											Open
											Base
										</Button>
										<Button
											size="sm"
											className="w-4/9"
											variant="secondary"
										>
											Share
											Base
										</Button>
									</CardContent>
								</Card>
							</div>
							<div className=" w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full p-5">
								<Card x-chunk="dashboard-02-chunk-0">
									<CardHeader className="p-2 pt-0 md:p-4">
										<CardTitle>
											Base
											1
										</CardTitle>
										<CardDescription>
											this
											is
											a
											base
											description
											for
											a
											workspace
										</CardDescription>
									</CardHeader>
									<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
										<Button
											size="sm"
											className="w-4/9 me-2"
										>
											Open
											Base
										</Button>
										<Button
											size="sm"
											className="w-4/9"
											variant="secondary"
										>
											Share
											Base
										</Button>
									</CardContent>
								</Card>
							</div>
							<div className=" w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full p-5">
								<Card x-chunk="dashboard-02-chunk-0">
									<CardHeader className="p-2 pt-0 md:p-4">
										<CardTitle>
											Base
											2
										</CardTitle>
										<CardDescription>
											this
											is
											a
											base
											description
											for
											a
											workspace
										</CardDescription>
									</CardHeader>
									<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
										<Button
											size="sm"
											className="w-4/9 me-2"
										>
											Open
											Base
										</Button>
										<Button
											size="sm"
											className="w-4/9"
											variant="secondary"
										>
											Share
											Base
										</Button>
									</CardContent>
								</Card>
							</div>

							<div className=" w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full p-5">
								<Card x-chunk="dashboard-02-chunk-0">
									<CardHeader className="p-2 pt-0 md:p-4">
										<CardTitle>
											Base
											4
										</CardTitle>
										<CardDescription>
											this
											is
											a
											base
											description
											for
											a
											workspace
										</CardDescription>
									</CardHeader>
									<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
										<Button
											size="sm"
											className="w-4/9 me-2"
										>
											Open
											Base
										</Button>
										<Button
											size="sm"
											className="w-4/9"
											variant="secondary"
										>
											Share
											Base
										</Button>
									</CardContent>
								</Card>
							</div>
							<div className=" w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full p-5">
								<Card x-chunk="dashboard-02-chunk-0">
									<CardHeader className="p-2 pt-0 md:p-4">
										<CardTitle>
											Base
											5
										</CardTitle>
										<CardDescription>
											this
											is
											a
											base
											description
											for
											a
											workspace
										</CardDescription>
									</CardHeader>
									<CardContent className="p-2 pt-0 md:p-4 md:pt-0 flex justify-between">
										<Button
											size="sm"
											className="w-4/9 me-2"
										>
											Open
											Base
										</Button>
										<Button
											size="sm"
											className="w-4/9"
											variant="secondary"
										>
											Share
											Base
										</Button>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
