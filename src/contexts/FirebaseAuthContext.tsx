import React, { createContext, FC, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../utils/firebase";

export const FirebaseAuthContext = createContext<{
  user: User | null;
  isInitialized: boolean;
}>({
  user: null,
  isInitialized: false,
});

export const FirebaseAuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (getUser) => {
      if (getUser) {
        setUser(getUser);
      }
      setIsInitialized(true);
    });
  });

  return (
    <FirebaseAuthContext.Provider value={{ user, isInitialized }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
