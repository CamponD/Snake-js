import { useEffect, useRef } from "react"
import styles from "./GameCanvas.module.css"

import Snake from "../classes/Snake.js"
import Food from "../classes/Food.js"

/**
* Componente principal que representa el juego Snake.
* - Contiene el canvas donde se dibuja el juego.
* - Inicializa y gestiona la serpiente, la comida y el bucle del juego.
* - Maneja la lógica de dirección mediante eventos de teclado.
* @param {{ gameOver: () => void }} props - Función a ejecutar cuando la serpiente muere (pantalla Game Over).
* @returns {JSX.Element}
*/
function GameCanvas({ gameOver }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const cellSize = 20
    const speed = 100
    let count = 0

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
    window.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      if (key === "a" && !(currentDirection.x === 1 && currentDirection.y === 0))
        nextDirection = { x: -1, y: 0 }
      if (key === "w" && !(currentDirection.x === 0 && currentDirection.y === 1))
        nextDirection = { x: 0, y: -1 }
      if (key === "d" && !(currentDirection.x === -1 && currentDirection.y === 0))
        nextDirection = { x: 1, y: 0 }
      if (key === "s" && !(currentDirection.x === 0 && currentDirection.y === -1))
        nextDirection = { x: 0, y: 1 }
    })

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
          gameOver()
        }

        if (snake.eatFood) {
          food = new Food(canvas, { width: cellSize, height: cellSize })
          foodPosition = food.setRandomPosition()
          count += 1
          console.log(count)
          snake.eatFood = false
        }

        currentDirection = nextDirection

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        food.draw(ctx)
        snake.draw(ctx)

        lastTime = timestamp
      }

      // Lanza el bucle principal del juego
      requestAnimationFrame(gameLoop)
    }

    gameLoop()

  }, [gameOver])

  return (
    <canvas
      ref={canvasRef}
      className={styles.game}
      width={800}
      height={600}
    />
  )
}

export default GameCanvas