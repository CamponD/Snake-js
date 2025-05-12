class Snake {
  constructor(initialBody, size, color) {
    this.body = initialBody
    this.size = size
    this.color = color
    this.eatFood = false
  }

  update(canvas, direction, foodPosition) {
    const newHead = {
      x: this.body[0].x + direction.x,
      y: this.body[0].y + direction.y
    }
    const cols = canvas.width / this.size.width
    const rows = canvas.height / this.size.height

    if (newHead.x < 0 || newHead.x >= cols) return
    if (newHead.y < 0 || newHead.y >= rows) return

    this.body.forEach(segment => {
      if(segment.x == newHead.x && segment.y == newHead.y)
        return
    })

    // 2. Añadir al principio
    this.body.unshift(newHead)

    if (newHead.x == foodPosition.x && newHead.y == foodPosition.y){
      this.eatFood = true
    }else{
      // 3. Quitar la última parte (cola)
      this.body.pop()
    }    
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