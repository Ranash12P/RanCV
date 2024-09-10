import React from 'react';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={styles.projects}>
    <div className={styles.container}>
      <h2>Portfolio</h2>

      {/* Managing a Drinking System */}
      <div className={styles.project}>
        <h3>Managing a Drinking System</h3>
        <p>Developed a full-stack application for managing a drinking system. Multi-stage software project, utilizing Java, Scene Builder, and Jubula. Hands-on experience in full-stack system development and collaborative team settings.</p>
      </div>

      {/* Online Book Club */}
      <div className={styles.project}>
        <h3>Online Book Club</h3>
        <p>Built a client-server application using Node.js, React, and MongoDB. The platform allows users to track their reading habits, create book clubs, and leave reviews for their favorite books.</p>
      </div>

      {/* BTS - Blockchain Trading System */}
      <div className={styles.project}>
        <h3>BTS - Blockchain Trading System</h3>
        <p>Developed a cryptocurrency trading system using React and integrated real-time charts via TradingView.</p>
      </div>

      {/* Personal Website Using React */}
      <div className={styles.project}>
        <h3>Personal Website Using React</h3>
        <p>Developed a personal portfolio website showcasing projects, skills, and contact information. The website is responsive and optimized for performance and SEO.</p>
      </div>

      {/* Real-Time Programming Game */}
      <div className={styles.project}>
        <h3>Real-Time Programming Game</h3>
        <p>Created a real-time version of the classic game "Space Invaders," implementing game mechanics, graphics, and user interactions using modern JavaScript game development techniques.</p>
      </div>

      {/* Message Encryption System */}
      <div className={styles.project}>
        <h3>Message Encryption System</h3>
        <p>Designed a secure system for encrypting messages using a combination of SALSA20, RSA, and encryption algorithms to ensure data confidentiality and integrity.</p>
      </div>

      {/* Restaurant and Shell Menu Programming & ADT Programming */}
      <div className={styles.project}>
        <h3>Restaurant and Shell Menu Programming & ADT Programming</h3>
        <p>Programmed a user-friendly shell menu interface for restaurant operations, streamlining order management and leveraging ADT and file storage systems.</p>
      </div>

      {/* Udemy Courses */}
      <div className={styles.project}>
        <h3>Udemy Courses</h3>
        <p>Completed self-learning courses to enhance skills in Excel, Power BI, Python, and other key technologies for software development and data analysis.</p>
      </div>

    </div>
  </section>
);

export default Projects;
