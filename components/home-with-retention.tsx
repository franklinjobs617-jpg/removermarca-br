"use client"

import { useState } from "react"
import { UserRetentionBanner } from "./user-retention-banner"
import { LoginModal } from "./login-modal"
import { dictionaries } from "@/lib/dictionaries"

interface HomeWithRetentionProps {
  locale: string
}

export function HomeWithRetention({ locale }: HomeWithRetentionProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  
  const isEn = locale === "en"
  const dict = isEn ? dictionaries.en : dictionaries.pt

  const handleOpenLogin = () => {
    setIsLoginOpen(true)
  }

  const handleCloseLogin = () => {
    setIsLoginOpen(false)
  }

  return (
    <>
      <UserRetentionBanner 
        locale={locale} 
        trigger="after-time" 
        delay={30000}
        onOpenLogin={handleOpenLogin}
      />
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={handleCloseLogin} 
        locale={locale} 
        dict={dict} 
      />
    </>
  )
}