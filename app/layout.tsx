import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CarHub',
	description:
		'Welcome to CarHub, the premier destination for car enthusiasts and collectors.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${recursive.className}, 'relative'`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
