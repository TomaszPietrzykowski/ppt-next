'use client';

import React, {
	useState,
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useEffect,
} from 'react';

type IProviderProps = {
	children: React.ReactNode;
};

interface IUser {
	_id: string;
	name: string;
	email: string;
	isAdmin: boolean;
	isAuthor: boolean;
	token: string;
}

interface IContextProps {
	user: IUser | null;
	logIn: Dispatch<SetStateAction<IUser | null>>;
	logOut: Dispatch<SetStateAction<null>>;
	setLoadingUser: Dispatch<SetStateAction<boolean>>;
	loadingUser: boolean;
}

const checkForPersistentLogin = () => {
	let initialUser = null;
	let lsUser;
	if (typeof window !== 'undefined') {
		lsUser = localStorage.getItem('_user');
	}
	if (lsUser) {
		initialUser = JSON.parse(lsUser);
	}
	return initialUser;
};

const initialState: IContextProps = {
	user: checkForPersistentLogin(),
	logIn: () => {},
	logOut: () => {},
	loadingUser: false,
	setLoadingUser: () => {},
};

console.log('STORE: ', initialState);

const GlobalContext = createContext<IContextProps>(initialState);

export const GlobalContextProvider = ({ children }: IProviderProps) => {
	const [user, setUser] = useState<IUser | null>(initialState.user);
	const [loadingUser, setLoadingUser] = useState<boolean>(false);

	useEffect(() => {
		logIn(checkForPersistentLogin());
	}, []);

	const checkForPersistentLogin = () => {
		let initialUser = null;
		let lsUser;
		if (typeof window !== 'undefined') {
			lsUser = localStorage.getItem('_user');
		}
		if (lsUser) {
			initialUser = JSON.parse(lsUser);
		}
		return initialUser;
	};

	const logIn: Dispatch<SetStateAction<IUser | null>> = (user) => {
		setUser(user);
	};

	const logOut: Dispatch<SetStateAction<null>> = () => {
		window.alert('logout called');
		localStorage.removeItem('_user');
		setUser(null);
	};

	return (
		<GlobalContext.Provider
			value={{ user, logIn, logOut, loadingUser, setLoadingUser }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
