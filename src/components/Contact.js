import React from 'react';
import styles from './Contact.module.css';
import profilePicture from '../ran_army.jpeg'; // Adjusted path to src folder
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Import icons

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.container}>
      <h2>LET'S GET IN TOUCH</h2>
      <img src={profilePicture} alt="Profile" className={styles['profile-picture']} />
      <div className={styles.contactInfo}>
        <p><FaLinkedin className={styles.icon} /> <a href="https://www.linkedin.com/in/ran-polac" target="_blank" rel="noopener noreferrer">Ran Polac</a></p>
        <p><FaEnvelope className={styles.icon} /> <a href="mailto:ranpolac@gmail.com">ranpolac@gmail.com</a></p>
        <p><FaWhatsapp className={styles.icon} /> <a href="https://wa.me/972545217456" target="_blank" rel="noopener noreferrer">Send me a message</a></p>
        <p><FaPhoneAlt className={styles.icon} /> <a href="tel:054-5217456">054-5217456</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
