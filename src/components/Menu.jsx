import styles from './Menu.module.css';
import Border from './Border';

function Menu({ start }) {
  return (
    <Border>
      <div className={styles.menuContainer}>
        <h1 className={styles.titulo}>Snake Game</h1>
        <button className={styles.button} onClick={start} >Jugar</button>
        <button className={styles.button} onClick={start} >Jugar</button>
        <button className={styles.button} onClick={start} >Jugar</button>
        <button className={styles.button} onClick={start} >Jugar</button>
      </div>
    </Border>
  );
}

export default Menu;