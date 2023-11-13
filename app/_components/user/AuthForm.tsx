'use client';

import React, { useState } from 'react';
import styles from '../../_styles/user.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface IProps {
	variant: 'login' | 'register' | 'edit';
}

interface IAuthBody {
	name?: string;
	email: string;
	password: string;
	passwordConfirm?: string;
}

const UserForm = ({ variant }: IProps) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordConfirm, setPasswordConfirm] = useState<string>('');
	const [nameError, setNameError] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [passwordConfirmError, setPasswordConfirmError] =
		useState<string>('');
	const [rememberMe, setRememberMe] = useState<boolean>(true);
	const router = useRouter();

	const executeRequest = async (userData: IAuthBody) => {
		try {
			setLoading(true);
			const rawResponse = await fetch(
				`http://localhost:5000/api/users/${variant}`,
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				}
			);
			const res = await rawResponse.json();
			console.log(res);
			if (res?.status == 'success' && res.data?.token) {
				if (rememberMe) localStorage.setItem('_token', res.data.token);
				console.log(res); // handle state
				resetForm();
				router.replace('/user');
			}
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	const submitAuthForm = (e: React.FormEvent) => {
		e.preventDefault();
		// // validation
		if (variant !== 'login' && !name) {
			setNameError('Podaj nam swoje imię :)');
			return;
		}
		if (variant !== 'login' && name && name.trim().length < 2) {
			setNameError('Imię musi mieć minimum 2 znaki');
			return;
		}
		if (
			!email ||
			!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
		) {
			setEmailError('Podaj poprawny adress email');
			return;
		}
		if (!password) {
			setPasswordError('Wprowadż hasło');
			return;
		}
		if (password && password.length < 6) {
			setPasswordError('Hasło musi mieć minimum 6 znaków');
			return;
		}
		if (variant !== 'login' && password !== passwordConfirm) {
			setPasswordConfirmError('Hasła się nie zgadzają');
			return;
		}

		let bodyObject: IAuthBody = {
			email,
			password,
		};

		if (variant !== 'login') {
			bodyObject.name = name;
			bodyObject.passwordConfirm = passwordConfirm;
		}

		executeRequest(bodyObject);
	};

	const handleNameChange = (value: string) => {
		setNameError('');
		setName(value);
	};

	const handleEmailChange = (value: string) => {
		setEmailError('');
		setEmail(value);
	};

	const handlePasswordChange = (value: string) => {
		setPasswordError('');
		setPasswordConfirmError('');
		setPassword(value);
	};

	const handlePasswordConfirmChange = (value: string) => {
		setPasswordConfirmError('');
		setPasswordConfirm(value);
	};
	const handleRemeberMeCheckbox = (value: boolean) => {
		setRememberMe(value);
	};

	const resetForm = () => {
		setEmail('');
		setPassword('');
		setPasswordConfirm('');
		setName('');
		setEmailError('');
		setPasswordError('');
		setPasswordConfirmError('');
		setNameError('');
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
						<label
							htmlFor='name'
							className={
								nameError ? styles._err : styles._default
							}
						>
							{nameError ? nameError : 'Imię'}
						</label>
						{loading ? (
							<div className={styles.skeleton_input}></div>
						) : (
							<input
								type='text'
								name='name'
								value={name}
								onChange={(e) =>
									handleNameChange(e.target.value)
								}
								className={
									nameError ? styles._err : styles._default
								}
							/>
						)}
					</>
				)}
				<label
					htmlFor='email'
					className={emailError ? styles._err : styles._default}
				>
					{emailError ? emailError : 'Email'}
				</label>
				{loading ? (
					<div className={styles.skeleton_input}></div>
				) : (
					<input
						type='text'
						name='email'
						value={email}
						onChange={(e) => handleEmailChange(e.target.value)}
						className={emailError ? styles._err : styles._default}
					/>
				)}
				<label
					htmlFor='password'
					className={passwordError ? styles._err : styles._default}
				>
					{passwordError ? passwordError : 'Hasło'}
				</label>
				{loading ? (
					<div className={styles.skeleton_input}></div>
				) : (
					<input
						type='password'
						name='password'
						value={password}
						onChange={(e) => handlePasswordChange(e.target.value)}
						className={
							passwordError ? styles._err : styles._default
						}
					/>
				)}
				{variant == 'register' && (
					<>
						<label
							htmlFor='passwordConfirm'
							className={
								passwordConfirmError
									? styles._err
									: styles._default
							}
						>
							{passwordConfirmError
								? passwordConfirmError
								: 'Potwierdź hasło'}
						</label>
						{loading ? (
							<div className={styles.skeleton_input}></div>
						) : (
							<input
								type='password'
								name='passwordConfirm'
								value={passwordConfirm}
								onChange={(e) =>
									handlePasswordConfirmChange(e.target.value)
								}
								className={
									passwordConfirmError
										? styles._err
										: styles._default
								}
							/>
						)}
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
				<button
					className={styles.auth_form__submit}
					type='submit'
					disabled={loading}
				>
					{variant == 'login'
						? 'Zaloguj'
						: variant == 'register'
						? 'Utwórz konto'
						: 'Zapisz zmiany'}
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
