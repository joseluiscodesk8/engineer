import React, { useEffect } from "react";
import styles from "../../styles/index.module.scss";

const Two = () => {

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
    
        const two = document.querySelector(`.${styles.two}`);
        if (two) {
          observer.observe(two);
        }
    
        return () => {
          if (two) {
            observer.unobserve(two);
          }
        };
      }, []);

    return (
        <>
            <div className={styles.two}>
                <div><h2>2</h2></div>
                <p>Engineering work is executed</p>
            </div>
        </>
    )
}

export default Two;