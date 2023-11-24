import Header from './_components/layout/Header';
import { GlobalContextProvider } from './_context/store';
import './global.scss';

export const metadata = {
	title: 'Psychoterapia Michał Stachnik',
	description:
		'Psychoterapia Pozytywna i Transkulturowa. Konsultacje i porady. Załóż darmowe konto i rezerwuj kosultacje online.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<GlobalContextProvider>
					<Header />
					{children}
					<h1>Footer</h1>
				</GlobalContextProvider>
			</body>
		</html>
	);
}
