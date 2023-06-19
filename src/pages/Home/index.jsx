import React from 'react';
import styles from "./index.module.css";
import { useNavigate } from 'react-router-dom';

function GameMode({ title, description, buttonText, onClick }) {
  return (
    <div className={styles["mode"]}>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <button className={styles["button"]} onClick={onClick}>{buttonText}</button>
    </div>
  );
}

function ProfilePanel() {
  return (
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
          <li>Exchange coins for in-game items and profile customizations</li>
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
  );
}

function CompetitionsPanel() {
  return (
    <div className={styles["competitions-panel"]}>
      <h1>Competitions</h1>
      <h4>Coming soon!</h4>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const handleMultiplayerClick = () => {
    // Handle multiplayer button click
  };

  const handleTypingTestClick = () => {
    navigate("/practice");
  };

  const handleRaceFriendsClick = () => {
    // Handle race your friends button click
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["game-modes"]}>
        <GameMode
          title="Multiplayer"
          description="Increase your typing speed while racing against others"
          buttonText="Enter a Typing race"
          onClick={handleMultiplayerClick}
        />
        <GameMode
          title="Typing Test"
          description="Improve your typing skills on your own"
          buttonText="Practice Yourself"
          onClick={handleTypingTestClick}
        />
        <GameMode
          title="Race your friends"
          description="Create your own typing test and play with friends"
          buttonText="Create Typing test"
          onClick={handleRaceFriendsClick}
        />
      </div>
      <div className={styles["information-panel"]}>
        <ProfilePanel />
        <CompetitionsPanel />
      </div>
    </div>
  );
}
