import React from 'react'
import styles from "./index.module.css"
import { Outlet, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navgiate = useNavigate()

  return (
    <>
      <div className={styles["navbar"]}>
        <h1 onClick={() => navgiate("/")} className={styles["title"]}>Typely</h1>
      </div>
      <Outlet />
    </>
  )
}
