import Service from "../components/Service"
import styles from "../css/index.module.css"

export default function index() {
    return(
        <>
            <div className={styles.imageBanner}>
                <img className={styles.image} src="pexels-andrei-tanase-1271619-scaled.jpg" alt="Hiker on top of a mountain looking at the view" />
                <div className={styles.imageTextWrapper}>
                    <h1 className={styles.titletext}>Hiking Finds For Anyone</h1>
                    <h3 className={styles.subtext}>Here you’ll find the BEST Hiking gear for you. I share the best ways you can hike if you’re a beginner, Pro, or anyone in between. Our Hiking Gear Reviews will help you save money and keep you safe while out in the wilderness.</h3>
                </div>
            </div>
            <Service width="200px"/>
            <h1 id="discounts">Discounts</h1>
        </>
    )
}
