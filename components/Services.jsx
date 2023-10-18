import styles from "../css/services.module.css"
import Service from "./Service";

export default function Services(){
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Services</h1>
            <div className={styles.servicesWrapper}>
                <Service width="250px" />
                <Service width="250px" />
                <Service width="250px" />
            </div>
        </div>
    )
}
