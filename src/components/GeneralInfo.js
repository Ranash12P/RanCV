import React from 'react';
import styles from './GeneralInfo.module.css';

const GeneralInfo = () => (
  <section className={styles.general}>
    <div className={styles.container}>

    <h2>Education</h2>
      <div className={styles.section}>
        <h3>Braude College of Engineering</h3>
        <p>2020 - 2024</p>
        <p>B.SC Information System Engineering with GPA 84.</p>

        <h3>High School: Ort Kiryat Bialik</h3>
        <p>2013-2015</p>
        <p>Physics & Computer Science Major / High School Diploma.</p>
      </div>

      <h2>Work Experience</h2>
      <div className={styles.section}>
     
      <h3>Data Analyst at "Fieldin"</h3>
        <p>2024-now</p>
        <p>Analyzed datasets using Python and SQL, delivering insights to support business strategies.</p>
        <p>Created dashboards and reports in Power BI and Excel to communicate findings effectively.</p>
        <p>Improved data workflows by automating key processes, ensuring efficiency and accuracy.</p>
        <p>Ensured data accuracy by implementing validation frameworks and resolving inconsistencies.</p>
        <p>Worked with teams to improve data management practices.</p>


   \

        <h3>Shift Manager at “Superpharm”</h3>
        <p>2022-2024</p>
        <p>Trained and mentored new staff, ensuring adherence to company policies and high standards of service.</p>
        <p>Collaborated with senior management to implement store promotions and marketing strategies.</p>
        <p>Monitored and maintained stock levels using inventory management software, ensuring product availability.</p>

        <h3>Assitant Manager at “Cofix”</h3>
        <p>2018-2020</p>
        <p>Analyzed and interpreted sales data to identify trends, optimize inventory levels, and enhance decision-making processes.</p>
        <p>Implemented CRM and inventory systems, improving operational efficiency and customer service.</p>
        <p>Focused on optimizing processes and supporting business goals.</p>
        <p>Managed a team of 15 employees, overseeing scheduling and staff training, contributing to improved team productivity and customer satisfaction.</p>

      </div>

      <h2>Military</h2>
      <div className={styles.section}>
        <h3>Rifleman 07 / Combat Medic</h3>
        <p>Israeli Combat Engineering Corps</p>
        <p>Combined advanced combat engineering expertise with high-level infantry skills in high-stakes environments.</p>
        <p>Demonstrated strong leadership by guiding and supporting fellow soldiers, effectively managing emergencies and rapidly evolving situations.</p>
        <p>Trained in tactical decision-making, quick problem-solving, and teamwork in complex and dynamic settings.</p>
      </div>

      <h2>Languages</h2>
      <div className={styles.section}>
        <p>Hebrew: Native</p>
        <p>English: Fluent</p>
      </div>

    </div>
  </section>
);

export default GeneralInfo;
