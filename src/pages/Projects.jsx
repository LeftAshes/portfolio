import React from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.container}>
		<h2 className={styles.title}>참여 프로젝트</h2>
		<h3 className={styles.subtitle}>게임 프로젝트</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h4 className={styles.projectName}>벨라토레스 (Velatores) - 앤유</h4>
					<p className={styles.description}>
					앤유에서 개발한 액션 RPG 게임으로,{' '}
					<span className={styles.highlight}>Advanced Locomotion System (ALS)</span>과{' '}
					<span className={styles.highlight}>Unreal Lyra</span>를 활용하여 자연스러운 캐릭터 이동 및 특수 모션 구현에 기여했습니다.
					</p>
				</li>
				<li className={styles.item}>
					<h4 className={styles.projectName}>Football Manager Online - 세가 퍼블리싱 코리아</h4>
					<p className={styles.description}>
						세가 퍼블리싱 코리아의 온라인 축구 매니지먼트 게임으로, Adobe Flash와 ScaleForm을 이용한 UI 개발과 한국 및 중국 런칭 업무를 담당했습니다.
					</p>
				</li>
			</ul>

		{/* 기타 프로젝트 */}
		<h3 className={styles.subtitle}>기타 프로젝트</h3>
		<ul className={styles.list}>
			<li className={styles.item}>
				<h4 className={styles.projectName}>E-Book 교과서 개발 - 아이스캔디</h4>
				<p className={styles.description}>
					HTML5, CSS, JavaScript를 활용한 초등 교과서 개발 및 출판 업무 수행.  
					기존 프로젝트 유지보수와 클라이언트 요청에 따른 기능 개선에도 참여했습니다.
				</p>
			</li>
		</ul>
    </section>
  );
}
