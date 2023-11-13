'use client';

import { useGlobalContext } from '@/app/_context/store';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Header = () => {
	const { user, logIn, logOut } = useGlobalContext();

	useEffect(() => {
		if (!user) {
			const lsUser = localStorage.getItem('_user');
			if (lsUser) {
				const refreshUser = JSON.parse(lsUser);
				logIn(refreshUser);
			} else {
				logOut(null);
			}
		}
	}, [logIn, logOut, user]);

	const formatUserName = (name: string): string => {
		let output = name.trim().toUpperCase();
		if (output.length > 10) {
			output = output.slice(0, 8) + '(...)';
		}
		return output;
	};

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
						<li>{user ? formatUserName(user.name) : 'LOGIN'}</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
