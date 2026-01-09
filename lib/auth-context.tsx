"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

interface User { id: string; email: string; credits: number; }
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  credits: number;
  isLoaded: boolean; // 新增：标记数据是否加载完成
  login: (email: string) => Promise<void>;
  logout: () => void;
  deductCredit: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [credits, setCredits] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false); // 解决水合问题的关键

  const getTodayStr = () => new Date().toISOString().split('T')[0];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const u = JSON.parse(storedUser);
      setUser(u);
      setCredits(u.credits);
    } else {
      const today = getTodayStr();
      const lastReset = localStorage.getItem("guest_last_reset");
      const storedGuestCredits = localStorage.getItem("guest_credits");
      if (lastReset !== today) {
        localStorage.setItem("guest_last_reset", today);
        localStorage.setItem("guest_credits", "1");
        setCredits(1);
      } else {
        setCredits(storedGuestCredits ? parseInt(storedGuestCredits) : 1);
      }
    }
    setIsLoaded(true); // 标记已加载，此时客户端渲染可以和服务器不同
  }, []);

  const login = async (email: string) => {
    const newUser: User = { id: "google-123", email, credits: 3 };
    setUser(newUser);
    setCredits(3);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    const storedGuestCredits = localStorage.getItem("guest_credits");
    setCredits(storedGuestCredits ? parseInt(storedGuestCredits) : 1);
  };

  const deductCredit = (): boolean => {
    if (credits > 0) {
      const newAmount = credits - 1;
      setCredits(newAmount);
      if (user) {
        const updated = { ...user, credits: newAmount };
        setUser(updated);
        localStorage.setItem("user", JSON.stringify(updated));
      } else {
        localStorage.setItem("guest_credits", newAmount.toString());
      }
      return true;
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
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth error");
  return context;
};