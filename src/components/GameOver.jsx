import styles from './Menu.module.css'

/**
 * Componente de pantalla de Game  Over.
 * -
 * 
 * @param {{ restart: () => void }} props - Función que se ejecuta al pulsar el botón "Jugar".
 * @returns {JSX.Element}
 */
function GameOver({ restart }) {
    return (
        <div className={styles.menuContainer}>
            <button className={styles.button} onClick={restart}>Restart</button>
        </div>
    )
}

export default GameOver