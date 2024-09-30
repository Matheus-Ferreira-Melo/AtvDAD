import styles from "./FlashItems.module.css"

function FlashItems() {
    return (
        <div className={styles.container}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    )
}

export default FlashItems