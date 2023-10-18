import styles from "../css/Footer.module.css";
export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <header>
                    <h2>Detailing Shop LLC</h2>
                    <p>Little Description Little Description Little Description</p>
                </header>
                <aside>
                    <ul className={styles.catergory}>
                        <li>
                            <h3>Project</h3>
                        </li>
                        <li>Restoration</li>
                        <li>Detailing</li>
                        <li>Maintenance</li>
                    </ul>

                    <ul className={styles.catergory}>
                        <li>
                            <h3>Locations</h3>
                        </li>
                        <li>California</li>
                        <li>New York</li>
                        <li>Texas</li>
                    </ul>
                    <ul className={styles.catergory}>
                        <li>
                            <h3>Legal</h3>
                        </li>
                        <li>Refund Policy</li>
                        <li>Damages</li>
                    </ul>
                </aside>
            </footer>
        </>
    )
}
