'use client';

import React, { useEffect } from 'react';
import styles from '../../_styles/user.module.scss';
import { useGlobalContext } from '@/app/_context/store';
import { useRouter } from 'next/navigation';
import { User, UserCog } from 'lucide-react';
import dynamic from 'next/dynamic';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	const { user, logOut } = useGlobalContext();
	const router = useRouter();

	useEffect(() => {
		if (!user || !user?.token) {
			router.replace('/login');
		}
	}, [user, router]);

	return (
		<div className={styles.user_layout__container} suppressHydrationWarning>
			<div className={styles.user_layout__sidenav}>
				<nav>
					<ul className={styles.dashboard__nav}>
						<div className={styles.sidenav_avatar__container}>
							<div className={styles.sidenav_avatar}></div>
						</div>
						{user && (
							<div className={styles.sidenav_user_data}>
								<h2>{user.name}</h2>
								<p>{user.email}</p>
							</div>
						)}
						<div
							className={styles.sidenav_link_inactive}
							onClick={() => logOut(null)}
						>
							<li>
								<UserCog />
								<span>EDYTUJ DANE</span>
							</li>
						</div>
						<div
							className={styles.sidenav_link}
							onClick={() => logOut(null)}
						>
							<li>
								<User />
								<span>WYLOGUJ</span>
							</li>
						</div>
					</ul>
				</nav>
			</div>
			<div className={styles.user_layout__content}>{children}</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(UserLayout), { ssr: false });
