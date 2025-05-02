import styles from './GameCanvas.module.css';


function GameCanvas() {
    return (
      <canvas className={styles.game} width="800" height="600">
        Tu navegador no soporta Canvas 😢
      </canvas>
    );
  }
  
  export default GameCanvas;