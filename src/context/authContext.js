import {
  createContext,
  useContext,
  useState,
} from "react";
import PropTypes from "prop-types";

const AUTH_APP = "AUTH_APP_1";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(AUTH_APP) ?? false
  );

  const login = () => {
    window.localStorage.setItem(AUTH_APP, true);
    setIsAuthenticated(true);
  };

  const logout = () => {
    window.localStorage.removeItem(AUTH_APP);
    setIsAuthenticated(false);
  };

  const value = {
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
