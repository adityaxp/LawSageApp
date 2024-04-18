import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import firebaseConfigArgs from "../env/Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfigArgs);
    const authInstance = getAuth(firebaseApp);
    setAuth(authInstance);
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      setUser(user);
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
