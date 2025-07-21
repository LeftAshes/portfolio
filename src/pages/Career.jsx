import React from 'react';

export default function Career() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#121212', color: '#eee', minHeight: '100vh' }}>
      <h1 style={{ color: '#4caf50', marginBottom: '20px' }}>경력사항</h1>

      <section style={{ backgroundColor: '#1f1f1f', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <article style={{ marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
          <h2 style={{ color: '#81c784' }}>앤유 프로그램팀 선임연구원 (팀원)</h2>
          <p style={{ color: '#bbb' }}>2019.01 ~ 2024.04 (5년 4개월)</p>
          <p>주요 업무:</p>
          <ul>
            <li>(ALS) Advanced Locomotion System를 이용한 캐릭터 이동 구현</li>
            <li>Unreal Lyra를 이용한 캐릭터 이동 구현</li>
            <li>캐릭터 특수 모션 구현</li>
            <li>Unreal UMG를 이용한 UI 제작</li>
          </ul>
          <p>주요 직무: 클라이언트 프로그래밍</p>
        </article>

        <article style={{ marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
          <h2 style={{ color: '#81c784' }}>아이스캔디 개발팀 사원 (팀원)</h2>
          <p style={{ color: '#bbb' }}>2017.04 ~ 2019.01 (1년 10개월)</p>
          <p>주요 업무:</p>
          <ul>
            <li>HTML5, JavaScript를 이용한 교과서 개발 및 출판</li>
            <li>초등교과서 개발 및 유지보수</li>
          </ul>
          <p>주요 직무: 웹개발자, 자바스크립트, HTML</p>
        </article>

        <article style={{ marginBottom: '25px', paddingBottom: '15px' }}>
          <h2 style={{ color: '#81c784' }}>세가퍼블리싱코리아 프로그램팀 사원 (팀원)</h2>
          <p style={{ color: '#bbb' }}>2014.10 ~ 2016.10 (2년 1개월)</p>
          <p>주요 업무:</p>
          <ul>
            <li>Adobe Flash, Autodesk ScaleForm을 이용한 Football Manager Online UI 개발</li>
            <li>Perforce, GIT, JIRA, Confluence를 사용한 버전 관리 및 작업 내역 관리</li>
            <li>Football Manager Online 한국 및 중국 런칭 지원</li>
          </ul>
          <p>주요 직무: 클라이언트 프로그래밍</p>
        </article>
      </section>
    </main>
  );
}
