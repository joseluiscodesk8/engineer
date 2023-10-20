/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/index.module.scss";
import { BsArrowRight } from "react-icons/bs"

const Reviews = () => {
  return (
    <section className={styles.reviews}>
    <h2>Reviews</h2>

    <p>Engineering firms can take months to reply but I know I can get answers from Enginectra within minutes. This has proven to be very beneficial for our clients.</p>

    <h3>Shane Normore, PDF Fire Protection Inc.</h3>

    <img src="https://assets-global.website-files.com/60f5f05fe558ed2c96379638/60f5fff420033916327ae198_PDS.svg" alt="logo" />

    <BsArrowRight className={styles.icon} />
  </section>
  );
};

export default Reviews;
