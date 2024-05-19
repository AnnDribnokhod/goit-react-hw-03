import React from 'react';
import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export default function Contact ({ id, name, number, onDeleteContact }) {
  return(
  <li className={styles.item}>
    <div className={styles.info}>
      <div className={styles.wrapper}>
      <FaUser className={styles.icon} />
      <p>{name}</p>
      </div>
      <div  className={styles.wrapper}>
      <FaPhone className={styles.icon} />
      <p>{number}</p>
      </div>
    </div>
    <button className={styles.button} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
)};
