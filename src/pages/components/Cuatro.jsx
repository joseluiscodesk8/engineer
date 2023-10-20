import React, { useEffect } from "react";
import styles from "../../styles/index.module.scss";


const Cuatro = () => {

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
    
        const cuatro = document.querySelector(`.${styles.cuatro}`);
        if (cuatro) {
          observer.observe(cuatro);
        }
    
        return () => {
          if (cuatro) {
            observer.unobserve(cuatro);
          }
        };
      }, []);

    return (
        <>
            <div className={styles.cuatro}>
                <div><h2>4</h2></div>
                <p>Simplified payment</p>
            </div>
        </>
    )
}

export default Cuatro;