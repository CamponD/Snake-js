import styles from './Menu.module.css'

/**
 * Componente de pantalla de Game  Over.
 * -
 * 
 * @param {{ restart: () => void }} props - Función que se ejecuta al pulsar el botón "Jugar".
 * @returns {JSX.Element}
 */
function GameOver({ restart }) {
    const record = localStorage.getItem("bestScore") || 0
    return (
        <div className={styles.menuContainer}>
            <div className={styles.boxButton}>
                <button className={styles.button} onClick={restart}>Restart</button>
                <button className={styles.button} onClick={()=>{localStorage.removeItem("bestScore")}}>Claer</button>
            </div>
            
            Score: {record}
        </div>
        
    )
}

export default GameOver