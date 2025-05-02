import borderImg from "/border.png"

import styles from "./Border.module.css"

function Border({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {children}
            </div>
            <img src={borderImg} alt="Marco decorativo" className={styles.frame} />
        </div>
    )
}

export default Border