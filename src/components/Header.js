import React, { useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector(`.${styles.header}`);
    if (header) {
      console.log("Header element found. Applying animation class...");
      setTimeout(() => {
        header.classList.add(styles.animate);
        console.log("Animation class applied.");
      }, 100); // Slight delay to ensure content is rendered
    } else {
      console.log("Header element not found.");
    }
  }, []);

  return (
    <header className={styles.header}>
  <div className={styles.container}>
    <h1>Ran Polac</h1>
    <h2 style={{ color: 'yellow' }}>B.Sc Information Systems Engineering</h2>
    
    <h3>
      Hey there! I'm Ran, a <strong>Data Analyst and Data Quality Specialist</strong> with a B.Sc in Information Systems Engineering.
    </h3>

    <p>
      I have hands-on experience in <strong>data analysis and data validation</strong> using <strong>Python, SQL, and Excel</strong> 
      to ensure data accuracy and deliver actionable insights.
    </p>

    <p>
      Worked with <strong>BigQuery, Looker, MySQL, and Power BI</strong>, leveraging these tools to extract insights, 
      create dashboards, and enhance decision-making.
    </p>

    <p>
      Now, I'm looking for new opportunities to apply my expertise and drive business impact.
    </p>
  </div>
</header>

  );
};

export default Header;
