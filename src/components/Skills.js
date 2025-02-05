import React from 'react';
import styles from './Skills.module.css';

const Skills = () => (
  <section className={styles.skills}>
    <div className={styles.container}>
      <h2>Skills</h2>
      <ul className={styles.skillList}>
        <li className={styles.skillItem}>
          <strong>Programming Languages:</strong> proficient in Python, C, Java (OOP), and JavaScript.
        </li>
        <li className={styles.skillItem}>
          <strong>Web Development:</strong> skilled with building web applications using HTML, CSS, React, and Node.js.
        </li>
        <li className={styles.skillItem}>
          <strong>Database Management:</strong> familiar with SQL, MySQL, and noSQL databases.
        </li>
        <li className={styles.skillItem}>
          <strong>Software Architecture:</strong> knowledgeable in OPM, UML, and ERD with expertise in characterizing systems optimally to meet customer needs.
        </li>
        <li className={styles.skillItem}>
          <strong>Development Skills:</strong> skilled in using Git, Excel, and Power BI for project management.
        </li>
        <li className={styles.skillItem}>
          <strong>Problem Solving:</strong> ability to analyze complex problems and develop effective solutions.
        </li>
        <li className={styles.skillItem}>
          <strong>Human Skills:</strong> a team player with excellent communication skills, attention to details, and the ability to prioritize tasks effectively.
        </li>
        <li className={styles.skillItem}>
          <strong>Cloud Platforms:</strong> experience with AWS, Google Cloud, and Azure.
        </li>
        <li className={styles.skillItem}>
          <strong>Version Control:</strong> skilled in Git and GitHub for version control and collaboration.
        </li>
        <li className={styles.skillItem}>
          <strong>Agile Methodologies:</strong> experienced in Scrum and Kanban for project management.
        </li>
        <li className={styles.skillItem}>
          <strong>API Development:</strong> proficient in building and consuming RESTful APIs.
        </li>
        <li className={styles.skillItem}>
          <strong>Cybersecurity:</strong> basic knowledge of network security principles and data protection.
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
