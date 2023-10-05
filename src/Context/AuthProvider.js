import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(storedAuth === 'true');
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;