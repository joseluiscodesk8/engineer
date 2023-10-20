import React, { useEffect } from 'react';
import styles from '../../styles/index.module.scss';

const Electrical = () => {

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

    const electrical = document.querySelector(`.${styles.electrical}`);
    if (electrical) {
      observer.observe(electrical);
    }

    return () => {
      if (electrical) {
        observer.unobserve(electrical);
      }
    };
  }, []);
  return (
    <section className={styles.electrical}>
      <picture>
        <img
          src="https://assets-global.website-files.com/5eccece43dd22180f71e8429/60fedbfebfb6d67100b88a44_Asset%205.svg"
          alt="img"
        />
      </picture>
      <h4>ELECTRICAL ENGINEERING</h4>
    </section>
  );
};

export default Electrical;
