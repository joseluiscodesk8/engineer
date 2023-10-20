/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/index.module.scss";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <section>
        <span>What We Do</span>
        <span>Why Enginectra</span>
        <span>How It Works</span>
        <span>Get Started</span>
        <img
          src="https://assets-global.website-files.com/5eccece43dd22180f71e8429/60fed9f56e15a3b8e737db90_logo-enginectra.svg"
          alt="logo"
        />
      </section>
      <div>
        <BsLinkedin />
      <GrFacebook />
      <FaInstagramSquare />
        </div>
      <section>
        <p>Copyright 2023 - Enginectra. All rights reserved Privacy — Terms</p>
      </section>
     
    </footer>
  );
};

export default Footer;
