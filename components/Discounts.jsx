import styles from "../css/discounts.module.css"

export default function Discounts() {
    return (
        <div className={styles.wrapper}>
            <h1 id="discounts">Discounts</h1>
            <ul className={styles.cards}>
                <li className={styles.card}>
                    <img src="../automobile.png" />
                    <div className={styles.textContainer}>
                        <h2>Multi-Car <span className={styles.discountPrice}>10%</span></h2>
                        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur</p>
                    </div>
                </li>
                <li className={styles.card}>
                    <img src="../automobile.png" />
                    <div className={styles.textContainer}>
                        <h2>Multi-Car <span className={styles.discountPrice}>10%</span></h2>
                        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur</p>
                    </div>
                </li>
                <li className={styles.card}>
                    <img src="../automobile.png" />
                    <div className={styles.textContainer}>
                        <h2>Multi-Car <span className={styles.discountPrice}>10%</span></h2>
                        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur</p>
                    </div>
                </li>
                <li className={styles.card}>
                    <img src="../automobile.png" />
                    <div className={styles.textContainer}>
                        <h2>Multi-Car <span className={styles.discountPrice}>10%</span></h2>
                        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
