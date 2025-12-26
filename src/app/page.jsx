"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import SecretCode from "@/components/SecretCode"
import HeartReveal from "@/components/HeartReveal"
import ConfessionIntro from "@/components/ConfessionIntro"
import SpecialMessage from "@/components/SpecialMessage"

export default function ConfessionSite() {
  const [currentScreen, setCurrentScreen] = useState("loader")

  return (
    <AnimatePresence mode="wait">
      {currentScreen === "loader" && <Loader onComplete={() => setCurrentScreen("secretCode")} />}
      {currentScreen === "secretCode" && <SecretCode onUnlock={() => setCurrentScreen("heartReveal")} />}
      {currentScreen === "heartReveal" && <HeartReveal onComplete={() => setCurrentScreen("confessionIntro")} />}
      {currentScreen === "confessionIntro" && <ConfessionIntro onComplete={() => setCurrentScreen("message")} />}
      {currentScreen === "message" && <SpecialMessage />}
    </AnimatePresence>
  )
}
