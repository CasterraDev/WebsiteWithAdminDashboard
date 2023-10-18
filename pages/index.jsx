import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Services from "../components/Services"
import styles from "../css/index.module.css"

export default function index() {
    return (
        <>
            <div className={styles.imageBanner}>
                <img className={styles.image} src="autoHeader.jpg" alt="Hiker on top of a mountain looking at the view" />
                <div className={styles.imageTextWrapper}>
                    <h1 className={styles.titletext}>Best Detailing you can get</h1>
                    <h3 className={styles.subtext}>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua.</h3>
                </div>
            </div>
            <div className={styles.whiteBG}>
                <Services />
                <Discounts />
            </div>
            <Footer />
        </>
    )
}
