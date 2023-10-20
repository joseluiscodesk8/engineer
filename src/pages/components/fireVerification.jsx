import React, { useEffect } from 'react';
import styles from '../../styles/index.module.scss';

const FireVerification = () => {

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

    const verification = document.querySelector(`.${styles.verification}`);
    if (verification) {
      observer.observe(verification);
    }

    return () => {
      if (verification) {
        observer.unobserve(verification);
      }
    };
  }, []);

  return (
    <section className={styles.verification}>
      <picture>
        <img
          src="https://assets-global.website-files.com/5eccece43dd22180f71e8429/60fedbfebfb6d644d7b88a45_Asset%206.svg"
          alt="img"
        />
      </picture>
      <h4>FIRE ALARM VERIFICATION</h4>
    </section>
  );
};

export default FireVerification;