import React, { Fragment } from 'react';
import styles from '../../_styles/user.module.scss';
import Link from 'next/link';

const UserDashboard = () => {
	return (
		<Fragment>
			<div className={styles.user__profile}>
				<h2>Strefa autora</h2>
				<Link href='/user/edit/blog'>
					<button>Edytuj Blog</button>
				</Link>
				{/* <Link href='/user/edit/stories'>
					<button>Edytuj Opowiesci</button>
				</Link> */}
			</div>
		</Fragment>
	);
};

export default UserDashboard;
