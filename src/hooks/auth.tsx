import React, { ReactNode, createContext, useContext, useState, useEffect } from "react";

import { UserProps } from "../configs/interfaces";

interface AuthContextData {
    user: UserProps;
    handleGoogleSignIn: () => Promise<void>;
    handleFacebookSignIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({} as UserProps);

    useEffect(() => {
        setUser(
            { name: "Lucas", email: "Lucas@Lucas.com", token: null }
        );
    }, []);

    async function handleGoogleSignIn() {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    async function handleFacebookSignIn() {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                handleGoogleSignIn,
                handleFacebookSignIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };