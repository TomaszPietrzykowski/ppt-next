'use client';

import React, { Fragment, useEffect } from 'react';
import styles from '../../_styles/user.module.scss';
import Link from 'next/link';
import { useGlobalContext } from '@/app/_context/store';
import { useRouter } from 'next/navigation';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	const { user, logOut } = useGlobalContext();
	const router = useRouter();

	useEffect(() => {
		if (!user || !user?.token) {
			router.replace('/login');
		}
	}, [user, router]);

	return (
		<Fragment>
			<div className={styles.user_layout__container}>
				<div className={styles.user_layout__sidenav}>
					<nav>
						<ul className={styles.dashboard__nav}>
							<Link href='/user/edit'>
								<li>STREFA AUTORA</li>
							</Link>
							<div
								className={styles.sidenav_link}
								onClick={() => logOut(null)}
							>
								<li>WYLOGUJ</li>
							</div>
						</ul>
					</nav>
				</div>
				<div className={styles.user_layout__content}>{children}</div>
			</div>
		</Fragment>
	);
};

export default UserLayout;
