"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

interface User { email: string; credits: number; googleUserId: string; id: string; }
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

  // 获取本地游客“账本”
  const getGuestCredits = () => {
    if (typeof window === "undefined") return 1;
    const today = new Date().toDateString();
    const lastReset = localStorage.getItem("guest_reset_date");
    const stored = localStorage.getItem("guest_credits");

    if (lastReset !== today) {
      localStorage.setItem("guest_reset_date", today);
      localStorage.setItem("guest_credits", "1");
      return 1;
    }
    return stored ? parseInt(stored) : 1;
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (token) {
        try {
          const res = await fetch('/api/me', { headers: { 'Authorization': `Bearer ${token}` } });
          const data = await res.json();
          if (data.status === 'success') {
            setUser(data.user);
            setCredits(data.user.credits); // 登录状态：仅看账户分
          } else {
            localStorage.removeItem("auth_token");
            setCredits(getGuestCredits());
          }
        } catch (e) { setCredits(getGuestCredits()); }
      } else {
        setCredits(getGuestCredits()); // 游客状态：仅看本地分
      }
      setIsLoaded(true);
    };
    initializeAuth();
  }, []);

  const login = async (idToken: string) => {
    // 核心修复：不读取、不发送任何本地积分数据
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: idToken })
    });
    const data = await res.json();

    if (data.status === 'success') {
      setUser(data.user);
      setCredits(data.user.credits); // UI 立即切换为账户分
      localStorage.setItem("auth_token", data.token);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_token");
    // 核心修复：退出登录时，重新从本地存储加载当天的游客积分
    setCredits(getGuestCredits());
  };

  const deductCredit = async (): Promise<boolean> => {
    if (credits <= 0) return false;
    const token = localStorage.getItem("auth_token");

    if (user && token) {
      const res = await fetch('/api/deduct_credit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.status === 'success') {
        setCredits(data.credits);
        return true;
      }
    } else {
      // 游客扣费：仅修改本地存储
      const newCredits = credits - 1;
      setCredits(newCredits);
      localStorage.setItem("guest_credits", newCredits.toString());
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