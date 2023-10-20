/* eslint-disable @next/next/no-img-element */

import styles from "../../styles/index.module.scss";

const First = () => {
  return (
    <div className={styles.container}>

      <section className={styles.text_content}>
        <h1>Building Dreams, Engineering Realities.</h1>
        <p>Delivering Mechanical & Electrical Engineering services <b>faster</b> for small to midsize construction projects... with the help of technology</p>
        <button>Get Started</button>
      </section>

      <section className={styles.image_content}>
        <img src="https://assets-global.website-files.com/60f5f05fe558ed2c96379638/60f73cdc1f737e42f0f6fc71_Architect-3.svg" alt="imagen" />
      </section>

    </div>
  );
};

export default First;
