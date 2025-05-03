import borderImg from "/border.png"

import styles from "./Border.module.css"

function Border({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.inner}>
                    {children}
                </div>
            </div>
            <img src={borderImg} alt="Decorative border" className={styles.frame} />
        </div>
    )
}

export default Border