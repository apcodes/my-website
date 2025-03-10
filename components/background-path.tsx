"use client"

import { useEffect, useRef } from "react"

export default function BackgroundPath() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPath()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Draw the background path
    function drawPath() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set path style
      ctx.strokeStyle = "rgba(230, 230, 230, 0.8)"
      ctx.lineWidth = 1.5

      // Create a flowing path
      const points = 8
      const amplitude = canvas.height * 0.15
      const frequency = 0.005

      ctx.beginPath()

      // Start from left side, about 1/3 down
      ctx.moveTo(0, canvas.height * 0.3)

      // Create a flowing curve across the screen
      for (let i = 0; i <= points; i++) {
        const x = (canvas.width / points) * i
        const y = canvas.height * 0.3 + Math.sin(x * frequency) * amplitude

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          const prevX = (canvas.width / points) * (i - 1)
          const prevY = canvas.height * 0.3 + Math.sin(prevX * frequency) * amplitude

          const cpX1 = prevX + (x - prevX) / 3
          const cpX2 = prevX + ((x - prevX) * 2) / 3
          const cpY1 = prevY
          const cpY2 = y

          ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y)
        }
      }

      // Continue to bottom right
      ctx.lineTo(canvas.width, canvas.height)

      // Continue to bottom left
      ctx.lineTo(0, canvas.height)

      // Close the path
      ctx.closePath()

      // Fill with very subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(250, 250, 250, 0.5)")
      gradient.addColorStop(1, "rgba(245, 245, 245, 0.8)")
      ctx.fillStyle = gradient
      ctx.fill()

      // Stroke the path
      ctx.stroke()
    }

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
  )
}

