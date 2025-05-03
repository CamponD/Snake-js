import styles from './Menu.module.css'
import Border from './Border'

function Menu({ start }) {
  return (
    <Border>
      <div className={styles.menuContainer}>
        <button className={styles.button} onClick={start} >Jugar</button>
      </div>
    </Border>
  )
}

export default Menu