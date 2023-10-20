import React, { useEffect } from "react";
import styles from "../../styles/index.module.scss";

const One = () => {

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
    
        const car = document.querySelector(`.${styles.car}`);
        if (car) {
          observer.observe(car);
        }
    
        return () => {
          if (car) {
            observer.unobserve(car);
          }
        };
      }, []);

    return (
        <>
            <div className={styles.car}>
                <div><h2>1</h2></div>
                <p>Upload project details</p>
                <button>Get Started</button>
            </div>
        </>
    )
}

export default One;