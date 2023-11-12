import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className='layout__header'>
			<div className='layout__header-logo'>
				<Link href='/'>
					<h1>Michał Stachnik</h1>
				</Link>
			</div>
			<nav>
				<ul className='layout__header-nav'>
					<Link href='/'>
						<li>HOME</li>
					</Link>
					<Link href='/about'>
						<li>O MNIE</li>
					</Link>
					<Link href='/consultations'>
						<li>KONSULTACJE</li>
					</Link>
					<Link href='/stories'>
						<li>OPOWIEŚCI</li>
					</Link>
					<Link href='/blog'>
						<li>BLOG</li>
					</Link>
					<Link href='/contact'>
						<li>KONTAKT</li>
					</Link>
					<Link href='/user'>
						<li>KONTO</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
