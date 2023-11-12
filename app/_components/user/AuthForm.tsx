'use client';

import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import styles from '../../_styles/user.module.scss';
import Link from 'next/link';

interface IProps {
	variant: 'login' | 'register' | 'edit';
}

const UserForm = ({ variant }: IProps) => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordConfirm, setPasswordConfirm] = useState<string>('');
	const [rememberMe, setRememberMe] = useState<boolean>(true);

	const submitAuthForm = (e: React.FormEvent) => {
		e.preventDefault();
		if (false) return; // validation

		console.log('name: ', name);
		console.log('email: ', email);
		console.log('pasword: ', password);
		console.log('passwordConfirm: ', passwordConfirm);
	};

	const handleRemeberMeCheckbox = (value: boolean) => {
		setRememberMe(value);
		console.log('Checkbox value: ', value);
	};

	return (
		<div className={styles.auth_form__container}>
			<h1>
				{variant == 'login'
					? 'Zaloguj się'
					: variant == 'edit'
					? 'Edytuj dane'
					: 'Załóż konto'}
			</h1>
			<form onSubmit={submitAuthForm} className={styles.auth_form}>
				{variant == 'register' && (
					<>
						<label htmlFor='email'>Name</label>
						<input
							type='text'
							name='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</>
				)}
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='passwordConfirm'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{variant == 'register' && (
					<>
						<label htmlFor='passwordConfirm'>
							Confirm password
						</label>
						<input
							type='password'
							name='passwordConfirm'
							value={passwordConfirm}
							required
							onChange={(e) => setPasswordConfirm(e.target.value)}
						/>
					</>
				)}
				<div className={styles.checkbox_row}>
					<div className={styles.checkbox_remember}>
						{' '}
						<input
							type='checkbox'
							id='rememberme'
							name='rememberme'
							checked={rememberMe}
							onChange={(e) =>
								handleRemeberMeCheckbox(e.target.checked)
							}
						/>
						<label htmlFor='rememberme'>Zapamiętaj</label>
					</div>
					<div className={styles.checkbox_forgot}>
						<Link href='/register'>Zapomniałem hasła</Link>
					</div>
				</div>
				<button className={styles.auth_form__submit} type='submit'>
					Submit
				</button>
				{variant !== 'edit' && (
					<div className={styles.login_register__toggle}>
						{variant == 'login' ? (
							<div>
								Nie masz jeszcze konta?{' '}
								<Link href='/register'> Załóż teraz </Link>
							</div>
						) : (
							<div>
								Masz już konto?{' '}
								<Link href='/login'> Zaloguj się </Link>
							</div>
						)}
					</div>
				)}
			</form>
		</div>
	);
};

export default UserForm;
