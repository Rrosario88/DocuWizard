"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function MagicalStars() {
  const [stars, setStars] = useState<Star[]>([])
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to control star opacity and scale
  const starOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const starScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          size: Math.random() * 4 + 2, // 2-6px
          delay: Math.random() * 2, // 0-2s delay
          duration: Math.random() * 3 + 2, // 2-5s duration
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: starOpacity,
            scale: starScale,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"
              fill="url(#starGradient)"
              className="drop-shadow-sm"
            />
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--wizard-gold)" />
                <stop offset="50%" stopColor="var(--wizard-primary-light)" />
                <stop offset="100%" stopColor="var(--wizard-primary)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Scroll-triggered star burst effect
export function ScrollStarBurst() {
  const [burstStars, setBurstStars] = useState<Star[]>([])
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)

      // Trigger star burst on significant scroll movement
      if (scrollDelta > 100) {
        const newStars: Star[] = []
        const numStars = Math.min(Math.floor(scrollDelta / 50), 10)

        for (let i = 0; i < numStars; i++) {
          newStars.push({
            id: Date.now() + i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 3,
            delay: i * 0.1,
            duration: 1.5,
          })
        }

        setBurstStars(prev => [...prev, ...newStars])
        setLastScrollY(currentScrollY)

        // Clean up old stars after animation
        setTimeout(() => {
          setBurstStars(prev => prev.filter(star => !newStars.includes(star)))
        }, 2000)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {burstStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut",
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"
              fill="var(--wizard-gold)"
              className="drop-shadow-lg"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Floating magical particles
export function MagicalParticles() {
  const [particles, setParticles] = useState<Star[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Star[] = []
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 5,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, var(--wizard-primary-light), transparent)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -100, -200],
            x: [0, Math.sin(particle.id) * 50, Math.sin(particle.id * 2) * 100],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
