import React from 'react'
import styles from './Career.module.css'

export default function Career() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>경력사항</h1>

      {/* 게임 경력 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>게임 개발 경력</h2>

        <article className={styles.job}>
          <h3 className={styles.company}>앤유 프로그램팀 선임연구원 (팀원)</h3>
          <p className={styles.period}>2019. 01 ~ 2024. 04 (5년 4개월)</p>
          <ul className={styles.responsibilities}>
            <li>(ALS) Advanced Locomotion System를 이용한 캐릭터 이동 구현</li>
            <li>Unreal Lyra를 이용한 캐릭터 이동 구현</li>
            <li>캐릭터 특수 모션 구현 (점프, 낙하, 슬라이딩, 포복, 구르기, 전력질주 등)</li>
            <li>Unreal UMG를 이용한 UI 제작 (캐릭터 정보창, 숙련창, 인벤토리, 네임플레이트 등)</li>
            <li>Perforce, GIT, JIRA, Confluence를 이용한 버전 및 작업 내역 관리</li>
          </ul>
        </article>

        <article className={styles.job}>
          <h3 className={styles.company}>세가 퍼블리싱 코리아 프로그램팀 사원 (팀원)</h3>
          <p className={styles.period}>2014. 10 ~ 2016. 10 (2년)</p>
          <ul className={styles.responsibilities}>
            <li>Adobe Flash, Autodesk ScaleForm을 이용한 Football Manager Online UI 개발</li>
            <li>선수 정보창, 포지션 설정 창, 상점, 구단시설 관리창, 이벤트 배너 제작</li>
            <li>Perforce, GIT, JIRA, Confluence를 활용한 버전 및 작업 내역 관리</li>
            <li>Football Manager Online 한국 및 중국 런칭 참여</li>
          </ul>
        </article>
      </section>

      {/* 기타 경력 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>기타 경력</h2>

        <article className={styles.job}>
          <h3 className={styles.company}>아이스캔디 개발팀 사원 (팀원)</h3>
          <p className={styles.period}>2017. 04 ~ 2019. 01 (1년 10개월)</p>
          <ul className={styles.responsibilities}>
            <li>HTML5, JavaScript를 이용한 초등 교과서 개발 및 출판</li>
            <li>기존 작업물 유지보수 및 클라이언트 요청사항 반영</li>
            <li>웹 개발자로서 HTML, CSS, JavaScript 업무 수행</li>
          </ul>
        </article>
      </section>

      {/* 해외 경험 */}
      <section className={styles.overseas}>
        <h2 className={styles.sectionTitle}>해외 경험</h2>
        <p className={styles.period}>2016. 04 (2주)</p>
        <p>중국 – 세가 퍼블리싱 코리아 재직 중 DALE사 출장 근무 (Football Manager Online 중국 런칭 지원)</p>
      </section>
    </section>
  )
}
