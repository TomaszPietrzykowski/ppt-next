import React from 'react';
import styles from '../../_styles/user.module.scss';
import AuthForm from '../../_components/user/AuthForm';

const LoginPage = () => {
	return (
		<div className={styles.auth__container}>
			<AuthForm variant='login' />
		</div>
	);
};

export default LoginPage;
