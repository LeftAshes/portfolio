import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About.jsx'
import Career from './pages/Career.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            소개
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            경력사항
          </NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
    </div>
  )
}


