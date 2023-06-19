import { WordsContainer } from "../../components"
import { useTypingConfig } from "../../contexts/TypingConfigContext"
import styles from "./index.module.css"

export default function Practice() {
  const { timer, times, setTimer } = useTypingConfig()

  return (
    <div className={styles["page-test"]}>
      <div className={styles["test-settings"]}>
        <div className={styles["row"]}>
          <div className={styles["settings"]}></div>
          <div className={styles["mode"]}></div>
          <div className={styles["times"]}>
            {times.map((t, i) => <div onClick={() => setTimer(t)} key={i} className={`${styles["text-button"]} ${timer == t ? styles["active"] : ""}`}>{t}</div>)}
          </div>
        </div>
      </div>
      <WordsContainer />
    </div>
  )
}
