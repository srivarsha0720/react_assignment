import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { loginUser, signupUser, logoutUser } from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loginUser,
      signupUser,
      logoutUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);