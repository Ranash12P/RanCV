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
        Hey there! I'm Ran, a dedicated and enthusiastic person with a strong passion for technology and problem-solving. I have a solid background in customer service and management, where I honed my leadership, communication, and multitasking skills.

        <h3>
          <h3>
          I’m proficient in Python, SQL, Excel, and PowerBI, 
          and I’m always eager to learn and grow. My experience has taught me how to handle 
          pressure and deliver results while maintaining a focus on efficiency and teamwork.

          </h3>
          In information systems roles, I’m committed to improving processes, 
          making data-driven decisions, and bridging the gap between technology and business needs.
           I bring both technical skills and the customer needs to everything I do.
          </h3>
        </h3>
        <h3>Ready to take the next step in my career and contribute to the success of a great team.
        </h3>
        <h3>Seeking any positions in related fields, available 5 days a week.</h3>

      </div>
    </header>
  );
};

export default Header;
