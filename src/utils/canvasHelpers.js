export function drawGrid(ctx, cellSize, canvas) {
    const cols = canvas.width / cellSize
    const rows = canvas.height / cellSize

    ctx.strokeStyle = "rgb(222 14 14 / 10%)"
    ctx.lineWidth = 1

    // Dibujar líneas verticales
    for (let x = 0; x <= cols; x++) {
      ctx.beginPath()
      ctx.moveTo(x * cellSize, 0)
      ctx.lineTo(x * cellSize, canvas.height)
      ctx.stroke()
    }

    // Dibujar líneas horizontales
    for (let y = 0; y <= rows; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cellSize)
      ctx.lineTo(canvas.width, y * cellSize)
      ctx.stroke()
    }
  }

/**
 * Devuelve la velocidad modificada para aumentar la dificultad.
 * Reduce progresivamente la velocidad con un mínimo establecido.
 *
 * @param {number} speed - Velocidad inicial del juego (en ms).
 * @param {number} minSpeed - Velocidad mínima permitida (en ms).
 * @returns {number} - Nueva velocidad ajustada.
 */
export function adjustSpeed(speed, minSpeed = 35) {

  if (speed > 90) speed -= 10
  else if (speed > 50) speed -= 5
  speed = Math.max(speed, 35)

  return Math.max(speed, minSpeed)
}
      
          
/**
 * Devuelve un número entero aleatorio entre min (inclusive) y max (exclusive).
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}