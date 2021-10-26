import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.container}>
    <span className={styles.span}>ⓒ Copyright by Hyunji Yoo. All rights reversed.</span>
  </footer>
));

export default Footer;