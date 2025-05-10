class Snake {
  constructor(initialBody, size, color) {
    this.body = initialBody
    this.size = size
    this.color = color
  }

  update(canvas, direction) {
    const newHead = {
      x: this.body[0].x + direction.x,
      y: this.body[0].y + direction.y
    }
    const cols = canvas.width / this.size.width
    const rows = canvas.height / this.size.height

    if (this.body[0].x < 0 || this.body[0].x >= cols) return
    if (this.body[0].y < 0 || this.body[0].y >= rows) return

    // 2. Añadir al principio
    this.body.unshift(newHead)
    // 3. Quitar la última parte (cola)
    this.body.pop()
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.color
    this.body.forEach(segment => {
      ctx.fillRect(segment.x * this.size.width, segment.y * this.size.height, this.size.width, this.size.height)
    })
    ctx.closePath()
  }
}

export default Snake