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
      <div className={styles["information-panel"]}>
        <div className={styles["profile-panel"]}>
          <div className={styles["user"]}>
            <h1>Welcome Guest!</h1>
            <h4>Creating an account on Typely will allow you to take advantage of all the features of the site.</h4>
            <ul>
              <li>Participate in daily challenges</li>
              <li>Save your highscores</li>
              <li>Compete in tournaments</li>
              <li>Show up in all leaderboards</li>
              <li>Ability to personalize your profile</li>
              <li>Exchange coins for in game items and profile customizations</li>
              <li>Add friends</li>
            </ul>
            <button className={styles["create-account-btn"]}>Create Account</button>
          </div>
          <div className={styles["divider"]}></div>
          <div className={styles["friends"]}>
            <h1>Friends</h1>
            <h4>Create an account to add friends.</h4>
          </div>
        </div>
        <div className={styles["competitions-panel"]}>
          <h1>Competitions</h1>
          <h4>Coming soon!</h4>
        </div>
      </div>
      <div className={styles["leaderboard-panel"]}>

      </div>
    </div>
  )
}
