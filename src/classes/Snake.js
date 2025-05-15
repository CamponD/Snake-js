/**
 * Clase que representa la serpiente del juego.
 * Maneja la posición del cuerpo, el crecimiento, el movimiento
 * y la detección de colisiones.
 */
class Snake {
  /**
   * @param {Array<{x: number, y: number}>} initialBody - Posiciones iniciales de la serpiente.
   * @param {{ width: number, height: number }} size - Tamaño de cada segmento de la serpiente.
   * @param {string} color - Color de relleno para dibujar la serpiente.
   */
  constructor(initialBody, size, color) {
    this.body = initialBody
    this.size = size
    this.color = color
    this.eatFood = false
  }

  /**
   * Actualiza la posición de la serpiente y evalúa colisiones.
   * - Calcula la nueva cabeza.
   * - Detecta colisiones con bordes y consigo misma.
   * - Si come, evita quitar la cola para crecer.
   * 
   * @param {HTMLCanvasElement} canvas - Canvas principal del juego.
   * @param {{x: number, y: number}} direction - Dirección actual.
   * @param {{x: number, y: number}} foodPosition - Posición actual de la comida.
   * @returns {boolean} - Devuelve true si sigue viva, false si colisiona.
   */
  update(canvas, direction, foodPosition) {
    const newHead = {
      x: this.body[0].x + direction.x,
      y: this.body[0].y + direction.y
    }
    const cols = canvas.width / this.size.width
    const rows = canvas.height / this.size.height

    // Colisión con bordes
    if (newHead.x < 0 || newHead.x >= cols) {
      return false
    }
    if (newHead.y < 0 || newHead.y >= rows) {
      return false
    }

    // Colisión con el propio cuerpo
    const collision = this.body.slice(1).some(segment => {
      return segment.x === newHead.x && segment.y === newHead.y
    })
    
    if (collision) return false

    // Mover la cabeza
    this.body.unshift(newHead)

    // // Si come, mantener la cola
    if (newHead.x == foodPosition.x && newHead.y == foodPosition.y) {
      this.eatFood = true      
    } else {
      this.body.pop()
    }

    return true
  }

  /**
   * Dibuja la serpiente en el canvas.
   * @param {CanvasRenderingContext2D} ctx - Contexto 2D del canvas.
   */
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