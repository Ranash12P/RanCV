import React from 'react';
import styles from './GeneralInfo.module.css';

const GeneralInfo = () => (
  <section className={styles.general}>
    <div className={styles.container}>

    <h2>Education</h2>
      <div className={styles.section}>
        <h3>Braude College of Engineering</h3>
        <p>2020 - 2024</p>
        <p>B.SC Information System Engineering with GPA 85.</p>

        
        <h3>High School: Ort Kiryat Bialik</h3>
        <p>2013-2015</p>
        <p>Physics &  Computer Science Major / High School Diploma.</p>
      </div>

      <h2>Work Experience</h2>
      <div className={styles.section}>
        <h3>Manager at “Cofix”</h3>
        <p>2018-2020</p>
        <p>Analyzed sales data to support decision-making and improve efficiency.</p>
        <p>Utilized CRM and inventory systems to enhance operations and customer service.</p>
        <p>  Focused on optimizing processes and supporting business goals..</p>

        

      
        <h3>Shift Manager at “Superpharm”</h3>
        <p>2022-2024</p>
      </div>
      
      <h2>Military</h2>
      <div className={styles.section}>
        <h3>Rifleman 07 / Combat Medic</h3>
        <p>Israeli Combat Engineering Corps</p>
        <p>Combined combat engineering with high infantry skills. Experienced working under pressure and tight schedule restraints.</p>
      </div>
      
  
    </div>
  </section>
);

export default GeneralInfo;
