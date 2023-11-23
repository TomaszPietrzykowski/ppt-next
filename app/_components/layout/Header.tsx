'use client';

import { useGlobalContext } from '@/app/_context/store';
import { usePathname } from 'next/navigation';
import useScrollPosition from '@/app/_hooks/useScrollPosition';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '@/app/_styles/layout.module.scss';

import logo from '@/public/images/site/ptt-logo.png';

const Header = () => {
	const { user } = useGlobalContext();
	const [username, setUserName] = useState<string>('Login');
	const pathname = usePathname();

	useEffect(() => {
		if (user) {
			setUserName(user.name);
		}
	}, [user]);

	return (
		<header
			className='layout__header'
			style={{
				background: `rgba(255, 255, 255, ${
					0 + useScrollPosition(0.002) + (pathname == '/' ? 0 : 1)
				})`,
			}}
		>
			<div className='layout__header-logo'>
				<Link href='/'>
					<Image
						src={logo}
						alt='Michał Stachnik Psychoterapia Pozytywna'
						height={70}
						unoptimized
						className={styles.logo_image}
					/>
				</Link>
			</div>
			<nav>
				<ul className='layout__header-nav'>
					<Link href='/'>
						<li
							className={
								pathname == '/'
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							HOME
						</li>
					</Link>
					<Link href='/consultations'>
						<li
							className={
								pathname == '/consultations'
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							KONSULTACJE
						</li>
					</Link>
					<Link href='/blog'>
						<li
							className={
								pathname == '/blog'
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							BLOG
						</li>
					</Link>
					<Link href='/stories'>
						<li
							className={
								pathname == '/stories'
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							OPOWIEŚCI
						</li>
					</Link>
					<Link href='/about'>
						<li
							className={
								pathname == '/about'
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							O MNIE
						</li>
					</Link>
					<Link href='/contact'>
						<li
							className={
								pathname == '/contact'
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							KONTAKT
						</li>
					</Link>
					<Link href='/user'>
						<li
							className={
								pathname.startsWith('/user')
									? styles.nav_item__active
									: styles.nav_item
							}
						>
							{username.toUpperCase()}
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
