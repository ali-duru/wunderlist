import Header from '../../components/Header';
import './globals.css';

export const metadata = {
	title: 'Wunderlist V-2',
	description: 'Created by Ali DURU',
};

export default function RootLayout({ children }) {
	return (
		<html lang="tr">
			<body className="">
				<Header />
				{children}
			</body>
		</html>
	);
}
