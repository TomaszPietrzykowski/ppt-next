import React, { Fragment } from 'react';
import styles from '../../_styles/user.module.scss';
import Link from 'next/link';

const UserDashboard = () => {
	return (
		<Fragment>
			<div className={styles.user__profile}>
				<h1>Moje konto</h1>
				<div className={styles.admin__card}>
					<div className={styles.admin__card__inner_flex}>
						<h2>Strefa autora</h2>
						<p>Oddaj sie pracy twórczej</p>
					</div>
					<div className={styles.admin__card__inner_controls}>
						<Link href='/user/edit/blog'>
							<button>Edytuj Blog</button>
						</Link>
						<Link href='/user/edit/stories'>
							<button>Edytuj Opowiesci</button>
						</Link>
					</div>
				</div>
				<div className={styles.admin__card}>
					<h2>Dane osobowe</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quam, ratione quo sunt aperiam accusamus molestiae
						voluptatibus. Voluptatem aperiam suscipit eos, assumenda
						saepe cum? Hic aspernatur iure dicta cupiditate nostrum
						vero quas. Voluptatibus praesentium tenetur quidem earum
						illo deserunt quos sint veritatis consectetur corporis
						nisi similique doloribus placeat doloremque, quia
						mollitia autem omnis, nobis eaque quibusdam pariatur,
						sed quasi! Fugit illo facere deserunt
					</p>
				</div>
				<div className={styles.admin__card}>
					<h2>Ustawienia konta</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quam, ratione quo sunt aperiam accusamus molestiae
						voluptatibus. Voluptatem
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default UserDashboard;
