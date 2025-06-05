import { useEffect, useRef } from "react"
import styles from "./GameCanvas.module.css"

import Snake from "../classes/Snake.js"
import Food from "../classes/Food.js"
import { adjustSpeed } from "../utils/canvasHelpers.js"
import { playSound } from "../utils/soundManager"

/**
* Componente principal que representa el juego Snake.
* - Contiene el canvas donde se dibuja el juego.
* - Inicializa y gestiona la serpiente, la comida y el bucle del juego.
* - Maneja la lógica de dirección mediante eventos de teclado.
* @param {{ gameOver: () => void }} props - Función a ejecutar cuando la serpiente muere (pantalla Game Over).
* @param {{ setScore: any }} props - Función a ejecutar cuando la serpiente come (modifica score).
* @returns {JSX.Element}
*/
function GameCanvas({ gameOver, setScore }) { 
  const canvasRef = useRef(null)
  const scoreRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const cellSize = 20
    let speed = 150

    if (!canvas.getContext) return
    const ctx = canvas.getContext("2d")

    let initialBody = [
      { x: 10, y: 15 },
      { x: 9, y: 15 },
      { x: 8, y: 15 }
    ]

    // Variables de control de movimiento
    let currentDirection = { x: 1, y: 0 }
    let nextDirection = currentDirection
    let lastTime = 0

    // Instanciar juego
    let food = new Food(canvas, { width: cellSize, height: cellSize })
    let foodPosition = food.setRandomPosition()
    const snake = new Snake(initialBody, { width: cellSize, height: cellSize }, "#4CAF50")

    // Listener de teclado para controlar la dirección
    const keyHandler = (e) => {
      const key = e.key.toLowerCase();
      if (key === "a" && !(currentDirection.x === 1 && currentDirection.y === 0))
        nextDirection = { x: -1, y: 0 }
      if (key === "w" && !(currentDirection.x === 0 && currentDirection.y === 1))
        nextDirection = { x: 0, y: -1 }
      if (key === "d" && !(currentDirection.x === -1 && currentDirection.y === 0))
        nextDirection = { x: 1, y: 0 }
      if (key === "s" && !(currentDirection.x === 0 && currentDirection.y === -1))
        nextDirection = { x: 0, y: 1 }
    }
    window.addEventListener('keydown', keyHandler)

    /**
    * Bucle principal del juego.
    * - Se ejecuta en cada frame usando requestAnimationFrame.
    * - Controla el tiempo de movimiento de la serpiente.
    * - Actualiza la dirección y la lógica del juego.
    * - Dibuja el fondo, la comida y la serpiente.
    * - Detecta colisiones y termina el juego si es necesario.
    * 
    * @param {DOMHighResTimeStamp} timestamp - Tiempo proporcionado por requestAnimationFrame.
    */
    const gameLoop = (timestamp) => {
      if (timestamp - lastTime > speed) {
        const isAlive = snake.update(canvas, nextDirection, foodPosition)

        if (!isAlive) {
          const best = parseInt(localStorage.getItem("bestScore")) || 0
          if (scoreRef.current > best) {
            localStorage.setItem("bestScore", scoreRef.current)
          }
          playSound("/sounds/death.mp3", 0.6)

          gameOver()
        }

        if (snake.eatFood) {
          food = new Food(canvas, { width: cellSize, height: cellSize })
          foodPosition = food.setRandomPosition()
          scoreRef.current += 1
          setScore(scoreRef.current)

          speed = adjustSpeed(speed)
          snake.eatFood = false
          playSound("/sounds/eat.mp3", 0.6)
        }

        currentDirection = nextDirection

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        food.draw(ctx)
        snake.draw(ctx)

        lastTime = timestamp
      }

      // Lanza el bucle principal del juego
      animationId = requestAnimationFrame(gameLoop)
    }

    let animationId

    gameLoop()

    // Cleanup para desmontar GameCanvas
    return () => {
      window.removeEventListener("keydown", keyHandler)
      cancelAnimationFrame(animationId)
    }

  }, [gameOver, setScore])

  return (
    <>
      <canvas
        ref={canvasRef}
        className={styles.game}
        width={800}
        height={600}
      />
    </>
  )
}

export default GameCanvas