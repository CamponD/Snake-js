class Snake {
  constructor(initialBody, size, color, velocity) {
    this.body = initialBody
    this.size = size
    this.color = color
    this.velocity = velocity
  }

  update(direction) {
    const newHead = {
      x: this.body[0].x + direction.x,
      y: this.body[0].y + direction.y
    }
    // 2. Añadir al principio
    this.body.unshift(newHead)
    // 3. Quitar la última parte (cola)
    this.body.pop()
  }

  draw(ctx, cellSize) {
    ctx.beginPath()
    ctx.fillStyle = this.color
    this.body.forEach(segment => {
      ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize)
    })
    ctx.closePath()
  }
}

export default Snake