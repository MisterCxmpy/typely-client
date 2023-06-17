import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  )
}
