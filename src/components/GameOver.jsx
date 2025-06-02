import styles from './Menu.module.css'

/**
 * Componente de pantalla de Game  Over.
 * -
 * 
 * @param {{ restart: () => void }} props - Función que se ejecuta al pulsar el botón "Restart", nueva partida.
 * @param {{ backMenu: () => void }} props - Función que se ejecuta al pulsar el botón "Clear", limpia record y vuelve al Menu.
 * @param {{ score: any }} props - Estado que lleva la cuenta de la puntuación actual.
 * @returns {JSX.Element}
 */
function GameOver({ restart, backMenu, score }) {
    const record = localStorage.getItem("bestScore") || 0

    const clearRecord = () => {
        localStorage.removeItem("bestScore")
        backMenu()
    }
    return (
        <div className={styles.gameOverContainer}>
            <div className={styles.boxScore}>
                {(score >= record && score !== 0) && (
                <p className="new-record">🏆 Personal Record!</p>
            )}
            <p >Score: {score}</p>
            <p className="record">Record: {record}</p>
            </div>
            

            <div className={styles.boxButton}>
                <button className={styles.button} onClick={restart}>Restart</button>
                <button className={styles.button} onClick={clearRecord}>Claer</button>
            </div>
        </div>

    )
}

export default GameOver