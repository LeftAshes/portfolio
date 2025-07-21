import React from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>기술 스택</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>게임 개발</h3>
          <p>Unreal Engine(UMG, Blueprint), VisualStudio, C++</p>
        </div>

        <div className={styles.card}>
          <h3>그래픽</h3>
          <p>Adobe Animate(Flash), ActionScript, ScaleForm, Adobe Photoshop</p>
        </div>

        <div className={styles.card}>
          <h3>웹 기술</h3>
          <p>HTML5, CSS, JavaScript</p>
        </div>

        <div className={styles.card}>
          <h3>협업 및 버전 관리</h3>
          <p>GIT, Perforce, JIRA, Confluence, SVN</p>
        </div>
      </div>
    </section>
  );
}

