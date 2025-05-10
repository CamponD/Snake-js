import { useEffect, useRef } from "react"
import styles from "./GameCanvas.module.css"
import Border from "./Border"

import Snake from "../classes/Snake.js"
import Food from "../classes/Food.js"

function GameCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const cellSize = 20

    if (canvas.getContext) {
      var ctx = canvas.getContext("2d")

      let initialBody = [
        { x: 10, y: 15 },
        { x: 9, y: 15 },
        { x: 8, y: 15 }
      ]
      
      let currentDirection = { x: 1, y: 0 }
      let nextDirection = currentDirection
      let lastTime = 0
      let countStep = 0
      const speed = 150

      const snake = new Snake(initialBody, { width: cellSize, height: cellSize }, "#4CAF50")
      const food = new Food(canvas, { width: cellSize, height: cellSize })
      
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

      // timestamp -- Argumento que se pasa automáticamente a gameLoop (Tiempo actual 'ms' desde que la página empezo a cargarse.)
      const gameLoop = (timestamp) => {      
        if (timestamp - lastTime > speed) {
          snake.update(canvas, nextDirection)    
          currentDirection = nextDirection
          if (countStep % 3 == 0)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          food.draw(ctx)
          snake.draw(ctx)
          lastTime = timestamp
        }

        requestAnimationFrame(gameLoop)    
      }  

      gameLoop()
    }

  }, [])

  

  return (
    <Border>
      <canvas
        ref={canvasRef}
        className={styles.game}
        width={800}
        height={600}
      />
    </Border>
  )
}

export default GameCanvas