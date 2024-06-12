import { Navigation } from './_components/navigation';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-full flex dark:bg-neutral-900">
			<Navigation />
			<main className="flex-1 h-full overflow-y-auto">{children}</main>
		</div>
	);
}