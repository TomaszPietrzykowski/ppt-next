import React from 'react';
import styles from '../../_styles/user.module.scss';
import AuthForm from '@/app/_components/user/AuthForm';

const RegisterPage = () => {
	return (
		<div className={styles.auth__container}>
			<AuthForm variant='register' />
		</div>
	);
};

export default RegisterPage;
