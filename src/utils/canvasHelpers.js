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

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}