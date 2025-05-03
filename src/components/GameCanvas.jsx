import { useEffect, useRef } from 'react'
import styles from './GameCanvas.module.css'
import Border from './Border'


function GameCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d")
    }
    const cellSize = 20;
    const cols = canvas.width / cellSize;
    const rows = canvas.height / cellSize;

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;

    // Dibujar líneas verticales
    for (let x = 0; x <= cols; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cellSize, 0);
      ctx.lineTo(x * cellSize, canvas.height);
      ctx.stroke();
    }

    // Dibujar líneas horizontales
    for (let y = 0; y <= rows; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cellSize);
      ctx.lineTo(canvas.width, y * cellSize);
      ctx.stroke();
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
  );
}

export default GameCanvas