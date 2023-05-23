/* eslint-disable @typescript-eslint/no-empty-function */
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

type User = {
  email: string;
  accessToken: string;
}

export const AuthContext = createContext<{auth: AuthState, setAuth: Dispatch<SetStateAction<AuthState>>}>({
  auth: {isAuthenticated: false, user: null}, 
  setAuth: () => {},
});

const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
  const [auth, setAuth] = useState<AuthState>(
    {isAuthenticated: false, user: null},
  );

  return (
      <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthProvider;