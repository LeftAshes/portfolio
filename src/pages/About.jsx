import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>소개</h1>

      <div className={styles.personalInfo}>
        <p><strong>최민호</strong> / 남 / 1991년생 (만 34세)</p>
        <p>
          휴대폰: <a href="tel:01026823015" className={styles.link}>010-2682-3015</a> | 
          Email: <a href="mailto:cmh315@hanmail.net" className={styles.link}>cmh315@hanmail.net</a>
        </p>
        <p>주소: 서울 서초구 양재동</p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>학력</h2>
        <ul className={styles.list}>
          <li>
            <strong>안산공과대학</strong> (대학 2,3년) <br />
            2010.03 ~ 2012.02 졸업<br />
            전공: 컴퓨터정보, 학점 3.8 / 4.5
          </li>
          <li>
            <strong>화곡고등학교 이과계열</strong><br />
            2010년 졸업
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>경력 요약</h2>
        <p>게임 개발 경력 총 7년 4개월 (앤유 5년 4개월 + 세가 2년)</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>기타 경력</h2>
        <p>아이스캔디 개발팀 사원 1년 10개월 (웹 개발 및 교과서 출판)</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>보유 기술</h2>
        <ul className={styles.list}>
          <li>언리얼 엔진 (Unreal Engine) – 캐릭터 이동, 모션 구현, UMG UI 제작</li>
          <li>Advanced Locomotion System (ALS), Unreal Lyra 프레임워크 활용 경험</li>
          <li>Adobe Flash, Autodesk ScaleForm – 게임 UI 개발</li>
          <li>HTML5, CSS, JavaScript – 웹 기반 교과서 및 UI 개발</li>
          <li>버전 관리: Perforce, GIT</li>
          <li>프로젝트 관리 도구: JIRA, Confluence</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>인턴·대외활동 및 해외 경험</h2>
        <p>
          2016년 4월 중국 출장 – 세가 퍼블리싱 코리아 재직 중 DALE사 출장 근무 (Football Manager Online 중국 런칭 지원)
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>병역사항</h2>
        <p>군필 (육군 병장 제대, 2012.01 ~ 2013.10)</p>
      </section>
    </section>
  )
}
