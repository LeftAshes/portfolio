import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About.jsx';
import Career from './pages/Career.jsx';

export default function App() {
  return (
    <Router>
      <header style={{ backgroundColor: '#1f1f1f', padding: '15px 30px', textAlign: 'center' }}>
        <nav>
          <Link to="/" style={{ margin: '0 15px', color: '#4caf50', textDecoration: 'none', fontWeight: '600' }}>소개</Link>
          <Link to="/career" style={{ margin: '0 15px', color: '#4caf50', textDecoration: 'none', fontWeight: '600' }}>경력사항</Link>
        </nav>
      </header>

      <Routes>
        {/* 기본 화면은 About 컴포넌트 */}
        <Route path="/" element={<About />} />

        {/* /career 경로는 경력사항 페이지 */}
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

