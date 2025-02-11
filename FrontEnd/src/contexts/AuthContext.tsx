import React, { createContext, useContext, useState, useEffect } from "react";
import AuthSystem from "../services/authService";
import { LoginData, RegisterData, OtpData } from "../utils/details";
import authService from "../services/authService";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (data: LoginData) => boolean;
  logout: () => void;
  createAccount: (data: RegisterData) => boolean;
  checkOTP: (data: OtpData) => boolean;
  resendOtp: (email: string) => boolean;
  forgotPassword: (email: string) => boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authSystem = authService;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return !!localStorage.getItem("authToken");
  });

  const login = (data: LoginData): boolean => {
    if (authSystem.loginAccount(data)) {
      localStorage.setItem("authToken", "example-token"); // Replace with real token
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const createAccount = (data: RegisterData): boolean => {
    return authSystem.createAccount(data);
  };

  const checkOTP = (data: OtpData): boolean => {
    return authSystem.checOTP(data);
  };

  const resendOtp = (email: string): boolean => {
    return authSystem.resendOtp(email);
  };

  const forgotPassword = (email: string): boolean => {
    return authSystem.forgotPassword(email);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        createAccount,
        checkOTP,
        resendOtp,
        forgotPassword,
    }}
    ></AuthContext.Provider>
  )
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
