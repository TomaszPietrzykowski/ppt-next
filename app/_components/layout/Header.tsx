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
				boxShadow:
					useScrollPosition(1) > 160
						? `0px -4px 6px 6px rgba(0,0,0,0.15)`
						: 'none',
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
								pathname.startsWith('/consultations')
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
								pathname.startsWith('/blog')
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
								pathname.startsWith('/stories')
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
								pathname.startsWith('/about')
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
								pathname.startsWith('/contact')
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
