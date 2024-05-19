// src/components/SearchBox/SearchBox.jsx
import React from 'react';
import styles from './SearchBox.module.css';

export default function SearchBox ({ value, onChange }) {
  return (
  <div className={styles.container}>
    <label htmlFor='search'>Find contacts by name</label>
    <input type='text' id='search' value={value} onChange={onChange}className={styles.input}/>
  </div>
)};
