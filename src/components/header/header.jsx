import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onDialog }) => {
  
  const clickDialog = (event) => {
    const target = event.currentTarget.textContent;
    onDialog(target);
  }
  
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>MOTION</h1>
      <div className={styles.buttonList}>
        <button className={styles.button} onClick={clickDialog}>IMAGE</button>
        <button className={styles.button} onClick={clickDialog}>VIDEO</button>
        <button className={styles.button} onClick={clickDialog}>NOTE</button>
        <button className={styles.button} onClick={clickDialog}>TASK</button>
      </div>
    </header>
  )
});

export default Header;