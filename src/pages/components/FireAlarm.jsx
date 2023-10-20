import React, { useEffect } from 'react';
import styles from '../../styles/index.module.scss';

const FireAlarm = () => {

  useEffect(() => {
    const handIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollVisible);
          entry.target.classList.remove(styles.scroollHidden);
        } else {
          entry.target.classList.remove(styles.scrollVisible);
          entry.target.classList.add(styles.scroollHidden);
        }
      });
    };
    const observer = new IntersectionObserver(handIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const alarm = document.querySelector(`.${styles.alarm}`);
    if (alarm) {
      observer.observe(alarm);
    }

    return () => {
      if (alarm) {
        observer.unobserve(alarm);
      }
    };
  }, []);
  
  return (
    <section className={styles.alarm}>
      <picture>
        <img
          src="https://assets-global.website-files.com/5eccece43dd22180f71e8429/60fedbfebfb6d61a79b88a43_Asset%203.svg"
          alt="img"
        />
      </picture>
      <h4>FIRE ALARM DESING</h4>
    </section>
  );
};

export default FireAlarm;