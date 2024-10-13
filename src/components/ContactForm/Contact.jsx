import Button from "../Button/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contactform}>
        <div className={styles.top_btn}>
        <Button text="Via Support Chat"/>
        <Button text="Via Call" />
            </div>
        </div>
        <div className={styles.contactImage}></div>
    </section>
  )
}

export default Contact