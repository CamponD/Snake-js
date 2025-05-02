import styles from './GameCanvas.module.css';
import Border from './Border';


function GameCanvas() {
    return (
      <Border>
        <canvas className={styles.game} width="800" height="600">
          Tu navegador no soporta Canvas 😢
        </canvas>
      </Border>
    );
  }
  
  export default GameCanvas;