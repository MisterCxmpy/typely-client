import { WordsContainer } from "../../components"
import styles from "./index.module.css"

export default function Practice() {
  return (
    <div className={styles["page-test"]}>
      <div className={styles["test-settings"]}>
        <div className={styles["row"]}>
          <div className={styles["text-button"]}>
            Hello
          </div>
          <div className={styles["text-button"]}>
            Hello
          </div>
          <div className={styles["text-button"]}>
            Hello
          </div>
          <div className={styles["text-button"]}>
            Hello
          </div>
          <div className={styles["text-button"]}>
            Hello
          </div>
        </div>
      </div>
      <WordsContainer />
    </div>
  )
}
