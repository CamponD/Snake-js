/**
 * Clase que representa una comida del juego.
 * Genera una posición aleatoria válida dentro del canvas y se encarga de dibujarla.
 */
import { getRandomInt } from '../utils/canvasHelpers';
class Food {
    /**
   * @param {HTMLCanvasElement} canvas - Canvas donde se dibuja la comida.
   * @param {{ width: number, height: number }} size - Tamaño de la comida.
   */
    constructor(canvas, size) {
        this.canvas = canvas
        this.size = size
        this.setRandomPosition()
    }

    /**
   * Calcula una posición aleatoria dentro de la cuadrícula del canvas.
   * @returns {{x: number, y: number}} - Coordenadas de celda para colocar la comida.
   */
    setRandomPosition() {
        const cols = Math.floor(this.canvas.width / this.size.width)
        const rows = Math.floor(this.canvas.height / this.size.height)

        this.positionX = getRandomInt(0, cols) * this.size.width
        this.positionY = getRandomInt(0, rows) * this.size.height

        return ({ x: this.positionX / this.size.width, y: this.positionY / this.size.height })
    }

    /**
    * Dibuja la comida en la posición actual.
    * @param {CanvasRenderingContext2D} ctx - Contexto 2D del canvas.
    */
    draw(ctx) {
        ctx.fillStyle = "#f10909"
        ctx.fillRect(this.positionX, this.positionY, this.size.width, this.size.height)
    }

}

export default Food