import styles from './Menu.module.css'

/**
 * Componente de menú principal del juego.
 * - Muestra el título, la imagen decorativa y un botón para comenzar la partida.
 * 
 * @param {{ start: () => void }} props - Función que se ejecuta al pulsar el botón "Jugar".
 * @returns {JSX.Element}
 */
function Menu({ start }) {
  return (
      <div className={styles.menuContainer}>
        <div className={styles.boxButton}>
          <button className={styles.button} onClick={start} >Jugar</button>
        </div>
      </div>
  )
}

export default Menu