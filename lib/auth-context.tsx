"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

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

  // --- 核心逻辑：获取/刷新游客积分 ---
  const getGuestCredits = () => {
    const today = new Date().toDateString();
    const lastReset = localStorage.getItem("guest_reset_date");
    const storedCredits = localStorage.getItem("guest_credits");

    if (lastReset !== today) {
      // 如果是新的一天，发放 1 个游客积分
      localStorage.setItem("guest_reset_date", today);
      localStorage.setItem("guest_credits", "1");
      return 1;
    }
    // 如果是同一天，读取剩余积分（默认1）
    return storedCredits ? parseInt(storedCredits) : 1;
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("auth_token");

      if (token) {
        // 1. 已登录逻辑：从后端同步
        try {
          const res = await fetch(`${API_BASE}/api/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          if (data.status === 'success') {
            setUser(data.user);
            setCredits(data.user.credits);
          } else {
            localStorage.removeItem("auth_token");
            setCredits(getGuestCredits()); // 同步失败转游客逻辑
          }
        } catch (error) {
          console.error("Auto login failed:", error);
          setCredits(getGuestCredits()); // 网络失败转游客逻辑
        }
      } else {
        // 2. 游客逻辑：初始化 1 积分
        setCredits(getGuestCredits());
      }
      setIsLoaded(true);
    };

    initializeAuth();
  }, []);

  const login = async (idToken: string) => {
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
    localStorage.removeItem("auth_token");
    // 退出后立即恢复游客积分逻辑
    setCredits(getGuestCredits());
  };

  const deductCredit = async (): Promise<boolean> => {
    if (credits <= 0) return false;

    const token = localStorage.getItem("auth_token");

    if (user && token) {
      // 1. 登录用户：调用后端接口扣费
      const res = await fetch(`${API_BASE}/api/deduct_credit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email: user.email })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setCredits(data.credits);
        return true;
      }
    } else {
      // 2. 游客：更新本地存储
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
  const c = useContext(AuthContext);
  if (!c) throw new Error("useAuth error");
  return c;
};