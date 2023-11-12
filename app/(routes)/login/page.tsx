import React from 'react';
import styles from '../../_styles/user.module.scss';
import UserForm from '../../_components/user/UserForm';

const LoginPage = () => {
	return (
		<div className={styles.admin__container}>
			<h1>Zaloguj</h1>
			<UserForm />
		</div>
	);
};

export default LoginPage;
