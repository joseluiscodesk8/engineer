import React, { useEffect} from 'react';
import styles from '../../styles/index.module.scss';

const Mechanical = () => {

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

    const mechanical = document.querySelector(`.${styles.mechanical}`);
    if (mechanical) {
      observer.observe(mechanical);
    }

    return () => {
      if (mechanical) {
        observer.unobserve(mechanical);
      }
    };
  }, []);
  return (
    <section className={styles.mechanical}>
      <picture>
        <img
          src="https://assets-global.website-files.com/5eccece43dd22180f71e8429/60fedbfebfb6d64ac7b88a47_Asset%201.svg"
          alt="img"
        />
      </picture>
      <h4>MECHANICAL ENGINEERING</h4>
    </section>
  );
};

export default Mechanical;
