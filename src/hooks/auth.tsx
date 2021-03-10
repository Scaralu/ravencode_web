import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
	token: string;
	user: object;
}

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthContextDTO {
	user: object;
	signIn(credentials: SignInCredentials): Promise<void>;
	signOut(): void;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
	
	const [data, setData] = useState<AuthState>(() => {
		const token = localStorage.getItem('@ravencode:token');
		const user = localStorage.getItem('@ravencode:user');

		if (token && user) {
			return { token, user: JSON.parse(user) };
		}

		return {} as AuthState;
	});

	const signIn = useCallback(async ({email, password}) => {
		const response = await api.post('/sessions', {
			email,
			password
		});

		const { token, user } = response.data;

		localStorage.setItem('@ravencode:token', token);
		localStorage.setItem('@ravencode:user', JSON.stringify(user));

		setData({token, user})
	}, [])

	const signOut = useCallback(() => {
		localStorage.removeItem('@ravencode:token');
		localStorage.removeItem('@ravencode:user');
	}, [])

	return (
		<AuthContext.Provider value={{user: data.user, signIn, signOut}}>
			{children}
		</AuthContext.Provider>
	)
};

export function useAuth(): AuthContextDTO {
	const context = useContext(AuthContext);

	if (!context){
		throw new Error ('useAuth must be used within an AuthProvider');
	}

	return context;
}