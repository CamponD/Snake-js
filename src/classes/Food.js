import { getRandomInt } from '../utils/canvasHelpers';
class Food {
    constructor(canvas, size) {
        this.canvas = canvas
        this.size = size
        this.setRandomPosition()
    }

    setRandomPosition() {
        const cols = Math.floor(this.canvas.width / this.size.width)
        const rows = Math.floor(this.canvas.height / this.size.height)
        
        this.randomX = getRandomInt(0, cols) * this.size.width
        this.randomY = getRandomInt(0, rows) * this.size.height
        return ({ x: this.randomX / this.size.width, y: this.randomY / this.size.height})
    }

    draw(ctx) {
        ctx.fillStyle = "#f10909"       
        ctx.fillRect(this.randomX, this.randomY, this.size.width, this.size.height)
    }

}

export default Food