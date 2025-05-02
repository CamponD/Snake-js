import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.titulo}>Snake Game</h1>
      <button>Jugar</button>
    </div>
  );
}

export default Menu;