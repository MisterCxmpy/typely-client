import React from 'react'
import styles from "./index.module.css"
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles["container"]}>
      <div className={styles["game-modes"]}>
        <div className={styles["mode"]}>
          <h1>Multiplayer</h1>
          <h3>Increase your typing speed while racing against others</h3>
          <button className={styles["multiplayer-btn"]}>Enter a Typing race</button>
        </div>
        <div className={styles["mode"]}>
          <h1>Typing Test</h1>
          <h3>Improve your typing skills on your own</h3>
          <button onClick={() => navigate("/practice")} className={styles["typing-test-btn"]}>Practice Yourself</button>
        </div>
        <div className={styles["mode"]}>
          <h1>Race your friends</h1>
          <h3>Create your own typing test and play with friends</h3>
          <button className={styles["race-your-friends-btn"]}>Create Typing test</button>
        </div>
      </div>
      <div className={styles["profile-panel"]}>
        
      </div>
      <div className={styles["leaderboard-panel"]}>

      </div>
    </div>
  )
}
