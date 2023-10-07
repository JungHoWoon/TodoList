import React, { useContext } from 'react';
import styles from './Header.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

export default function Header({ filters, filter, onChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {darkMode ? <BiSolidSun /> : <BiSolidMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
