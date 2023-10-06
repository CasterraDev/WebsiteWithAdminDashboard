import styles from "../css/Navbar.module.css"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [hamChecked, setHamChecked] = useState(false);
    const toggleChecked = () => setHamChecked(value => !value);
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/">Hiker Find</Link>
                    </div>
                    <label className={`${styles.hamburgerMenu} ${(hamChecked ? styles.checked : "")}`}>
                        <input className={`${styles.input} ${(hamChecked ? styles.checked : "")}`} type="checkbox" onChange={toggleChecked} />
                    </label>
                    <div className={`${styles.items} ${(hamChecked ? styles.checked : "")}`}>
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact-us">Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}