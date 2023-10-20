import React, { useEffect } from "react";
import styles from "../../styles/index.module.scss";

const Tres = () => {

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
    
        const tres = document.querySelector(`.${styles.tres}`);
        if (tres) {
          observer.observe(tres);
        }
    
        return () => {
          if (tres) {
            observer.unobserve(tres);
          }
        };
      }, []);

    return (
        <>
            <div className={styles.tres}>
                <div><h2>3</h2></div>
                <p>Receive deliverables</p>
            </div>
        </>
    )
}

export default Tres;