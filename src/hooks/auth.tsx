import React, { ReactNode, createContext, useContext, useState, useEffect } from "react";

import { UserProps } from "../configs/interfaces";

interface AuthContextData {
    user: UserProps;
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

    return (
        <AuthContext.Provider
            value={{
                user
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