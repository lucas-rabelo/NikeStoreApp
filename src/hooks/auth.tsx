import React, { ReactNode, createContext, useContext, useState } from "react";
import { Alert } from "react-native";

import { UserProps } from "../configs/interfaces";

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { ProductListProps } from "../components/Lists/RecentlySeen";

interface AuthContextData {
    user: FirebaseAuthTypes.User | null;
    isLoading: boolean;
    products: ProductListProps[];
    getProducts: (category?: string, search?: string) => Promise<() => void>;
    handleSignIn: (email: string, password: string) => Promise<void>;
    handleForgotPassword: (email: string) => Promise<void>;
    handleRegisterOnApp: (email: string, password: string) => Promise<void>;
    handleGoogleSignIn: () => Promise<void>;
    handleFacebookSignIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [products, setProducts] = useState<ProductListProps[]>([]);

    async function handleSignIn(email: string, password: string) {
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }

    async function handleRegisterOnApp(email: string, password: string) {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    async function handleForgotPassword(email: string) {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você"))
            .catch((error) => {
                setIsLoading(false);
                console.log(error)
            })
    }

    async function getProducts(category?: string, search?: string) {
        const subscriber = firestore()
            .collection('products')
            .where('category', '==', category)
            .where('name', 'in', search)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as ProductListProps[];

                setProducts(data);
                setIsLoading(false);
            });

        return () => subscriber();
    }

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
                isLoading,
                products,
                getProducts,
                handleSignIn,
                handleForgotPassword,
                handleRegisterOnApp,
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