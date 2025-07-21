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
				<p>게임 개발 경력 총 7년 4개월 (앤유 5년 4개월 + 세가 2년) <br />
				기타 개발 경력 총 1년 10개월 (아이스캔디 1년 10개월)</p>
		</section>
	
		<section className={styles.section}>
			<h2 className={styles.subtitle}>해외 경험</h2>
			<p>
				2016년 4월 중국 출장 – 세가 퍼블리싱 코리아 재직 중 DALE사 출장 근무 (Football Manager Online 중국 런칭 지원)
			</p>
		</section>
	  
		<section className={styles.section}>
			<h2 className={styles.subtitle}>소개</h2>
			<p className={styles.paragraph}>
				안녕하세요, 게임 클라이언트 개발자 최민호입니다. 9년 이상의 개발 경험을 바탕으로
				언리얼 엔진과 UI 시스템, 그리고 다양한 협업 도구에 능숙합니다.  
				Velatores(앤유)와 Football Manager Online(세가) 프로젝트에서 클라이언트 개발과 UI 제작을 담당하며
				실무 역량을 쌓았습니다.
			</p>
	
			<h2 className={styles.subtitle}>개발자 강점 요약</h2>
			<ul className={styles.list}>
				<li><strong>약 9년 경력</strong>: 게임 클라이언트(약 7년) + 웹/E-Book(약 2년)</li>
				<li><strong>Unreal Engine 능숙자</strong>: ALS, Lyra 기반 캐릭터 이동 및 특수 모션 구현,<br /> UMG, Unreal BP를 이용한 UI 및 클라이언트 개발</li>
				<li><strong>UI/UX 개발 능력</strong>: Flash, ScaleForm, Photoshop 활용 경험</li>
				<li><strong>협업 능력</strong>: GIT, Perforce, JIRA, Confluence, SVN 숙련</li>
				<li><strong>다양한 프로젝트</strong>: Velatores, Football Manager Online, HTML5 교과서 개발</li>
			</ul>
		</section>
		
		<section className={styles.section}>
			<h2 className={styles.subtitle}>병역사항</h2>
			<p>군필 (육군 병장 제대, 2012.01 ~ 2013.10)</p>
		</section>
    </section>
  )
}
