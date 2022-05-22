import React, { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

export const COOKIE_ACCESS_TOKEN = "login_token";

type AuthContextInterface = {
  isAuthenticated: boolean;
  scopes: {
    [key: string]: boolean;
  };
  handleLogout: Function;
};

export const AuthContext = createContext<AuthContextInterface>({
  isAuthenticated: false,
  scopes: {},
  handleLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [scopes, setScopes] = useState<{
    [key: string]: boolean;
  }>();

  const handleLogout = () => {
    Cookie.remove(COOKIE_ACCESS_TOKEN);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setScopes({
        MANAGE_MY_DEPRESSION: true,
      });
    } else {
      setScopes({});
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const accessToken = Cookie.get(COOKIE_ACCESS_TOKEN);

    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      handleLogout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, scopes, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
