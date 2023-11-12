'use client';
import Link from 'next/link';
import React from 'react';
import styles from '../../../_styles/user.module.scss';
// import { useRouter } from 'next/navigation';

const AdminPage = () => {
	// const router = useRouter();

	// if (!user.isAuthenticated or sth) router.replace('/login');

	return (
		<div className={styles.admin__container}>
			<h1>Admin</h1>
			<Link href='/'>Home</Link>
		</div>
	);
};

export default AdminPage;
