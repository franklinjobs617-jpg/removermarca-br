"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

// 获取环境变量中的 API 地址
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface User { email: string; credits: number; }
interface AuthContextType {
  user: User | null; isLoggedIn: boolean; credits: number; isLoaded: boolean;
  login: (idToken: string) => Promise<void>;
  logout: () => void;
  deductCredit: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [credits, setCredits] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (token) {
        try {
          // 修改点：使用 API_BASE
          const res = await fetch(`${API_BASE}/api/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          if (data.status === 'success') {
            setUser(data.user);
            setCredits(data.user.credits);
          } else {
            localStorage.removeItem("auth_token");
          }
        } catch (error) {
          console.error("Auto login failed:", error);
        }
      }
      setIsLoaded(true);
    };
    initializeAuth();
  }, []);

  const login = async (idToken: string) => {
    // 修改点：使用 API_BASE
    const res = await fetch(`${API_BASE}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: idToken })
    });
    const data = await res.json();
    if (data.status === 'success') {
      setUser(data.user);
      setCredits(data.user.credits);
      localStorage.setItem("auth_token", data.token);
    }
  };

  const logout = () => {
    setUser(null);
    setCredits(0);
    localStorage.removeItem("auth_token");
  };

  const deductCredit = async (): Promise<boolean> => {
    const token = localStorage.getItem("auth_token");
    if (credits > 0 && user && token) {
      // 修改点：使用 API_BASE
      const res = await fetch(`${API_BASE}/api/deduct_credit`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
      });
      const data = await res.json();
      if (data.status === 'success') {
        setCredits(data.credits);
        return true;
      }
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, credits, isLoaded, login, logout, deductCredit }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error("useAuth error");
  return c;
};