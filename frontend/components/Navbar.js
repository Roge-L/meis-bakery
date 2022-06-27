import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Dropdown from "./Dropdown";
// import Footer from "./Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.list}>
          <Link href="/home">
            <div className={styles.hover}>
              <p className={styles.link}>Home</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.hover}>
              <p className={styles.link}>About</p>
            </div>
          </Link>
          <Link href="/cakes">
            <div className={styles.hover}>
              <p className={styles.link}>Cakes</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.hover}>
              <p className={styles.link}>Contact</p>
            </div>
          </Link>
        </div>
        <div className={styles.info}>
          <p>
            <strong>Contacts</strong>
            <br />
            <br />
            meiyang996@gmail.com
            <br />
            +1 306-717-7769
            <br />
            <br />
            2-10 Main St
            <br />
            Clavet
            <br />
            SK S0K 0Y0
            <br />
            Canada
          </p>
        </div>
        <div className={styles.media}></div>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2021 Mei's Bakery</p>
      </div>
    </div>
  );
};

export default Navbar;
