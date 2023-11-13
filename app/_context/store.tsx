'use client';

import React, {
	useState,
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
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

const initialState: IContextProps = {
	user: null,
	logIn: () => {},
	logOut: () => {},
	loadingUser: false,
	setLoadingUser: () => {},
};

const GlobalContext = createContext<IContextProps>(initialState);

export const GlobalContextProvider = ({ children }: IProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [loadingUser, setLoadingUser] = useState<boolean>(false);

	const logIn: Dispatch<SetStateAction<IUser | null>> = (user) => {
		setUser(user);
	};

	const logOut: Dispatch<SetStateAction<null>> = () => {
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
