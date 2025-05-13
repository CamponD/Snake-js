import styles from './Menu.module.css'

/**
 * Componente de pantalla de Game  Over.
 * -
 * 
 * @param {{ start: () => void }} props - Función que se ejecuta al pulsar el botón "Jugar".
 * @returns {JSX.Element}
 */
function GameOver({ start }) {
    return (
        <div className={styles.menuContainer}>
            <button className={styles.button} onClick={start}>Restart</button>
        </div>
    )
}

export default GameOver