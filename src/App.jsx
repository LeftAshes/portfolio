import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About.jsx'
import Career from './pages/Career.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
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
			<NavLink
            to="/Skills"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
			>
				기술 스택
			</NavLink>
			<NavLink
            to="/Projects"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
			>
				참여 프로젝트
          </NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  )
}


