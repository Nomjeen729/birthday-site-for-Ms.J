"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"

export default function SpecialMessage({ onComplete }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const messageRef = useRef(null)

  const handleComplete = () => {
    if (typeof onComplete === "function") onComplete()
  }

  useEffect(() => {
    if (currentIndex < fullMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, currentIndex + 1))
        setCurrentIndex((i) => i + 1)

        if (messageRef.current) {
          messageRef.current.scrollTop = messageRef.current.scrollHeight
        }
      }, 20)

      return () => clearTimeout(timer)
    } else {
      setShowCursor(false)
      const btnTimer = setTimeout(() => setShowButton(true), 1000)
      return () => clearTimeout(btnTimer)
    }
  }, [currentIndex])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* UI хэвээр */}
      <motion.button onClick={handleComplete}>View Memories</motion.button>
    </motion.div>
  )
}
