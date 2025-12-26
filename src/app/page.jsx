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
    <div className="min-h-screen bg-gradient-to-br from-pink-950/35 via-black/40 to-fuchsia-950/35 relative overflow-hidden">

      {/* Background effects */}
      <div
        className="fixed inset-0 z-0 blur-xl opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 25% 30%, rgba(236,72,153,0.7), transparent 40%)" }}
      />
      <div
        className="fixed inset-0 z-0 blur-xl opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 75% 75%, rgba(99,102,241,0.7), transparent 40%)" }}
      />
      <div
        className="fixed inset-0 z-0 blur-2xl opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(228,193,255,0.6), transparent 40%)" }}
      />

      <AnimatePresence mode="wait">
        {currentScreen === "loader" && (
          <Loader onComplete={() => setCurrentScreen("secretCode")} />
        )}

        {currentScreen === "secretCode" && (
          <SecretCode onUnlock={() => setCurrentScreen("heartReveal")} />
        )}

        {currentScreen === "heartReveal" && (
          <HeartReveal onComplete={() => setCurrentScreen("confessionIntro")} />
        )}

        {currentScreen === "confessionIntro" && (
          <ConfessionIntro onComplete={() => setCurrentScreen("message")} />
        )}

        {currentScreen === "message" && (
          <SpecialMessage />
        )}
      </AnimatePresence>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5, delay: 1 }}
        className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light"
      >
        @anujbuilds
      </motion.div>
    </div>
  )
}
