import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import notif from "../../assets/notif.png";
import profile from "../../assets/profile.png";
import Link from "next/link";

import Bihasa from "@/components/instructions/Bihasa";
import Dikta from "@/components/instructions/Dikta";
import Signayo from "@/components/instructions/Signayo";
import { useState, useEffect } from "react";
// hamburger menu for mobile
import { slide as Menu } from "react-burger-menu";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const showBihasa = () => {
    setIsVisible(true);
  };
  const showDikta = () => {
    setIsVisible1(true);
  };
  const showSignayo = () => {
    setIsVisible2(true);
  };
  const showSettings = (event) => {
    event.preventDefault();
    // Add your settings logic here
  };

  const [bmRight, setBmRight] = useState("100px");
  var styles2 = {
    bmBurgerButton: {
      position: "relative",
      width: "36px",
      height: "30px",
      right: bmRight,
      background: "transparent",
    },
    bmBurgerBars: {
      // Wrap bm-burger-bars in quotes
      background: "#373a47",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      right: "0px",
      top: "0px",
    },
    bmMenu: {
      top: "0px",
      right: "100px",
      background: "#dce7fe",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmOverlay: {
      right: "0px",
      top: "0px",
      background: "rgba(0, 0, 0, 0.3)",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmItemList: {
      color: "#b8b7ad",
      fontSize: "30px",
      // padding: "10px 0",
    },
    bmItem: {
      padding: "10px 0",
      fontFamily: "'Nunito', sans-serif",
      cursor: "pointer",
      color: "black",
    },
  };

  const updateDimensions = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1000 && windowWidth > 500) {
      setBmRight("100px");
    } else if (windowWidth <= 500) {
      setBmRight("50px");
    } else {
      setBmRight("100px");
    }
  };
  useEffect(() => {
    updateDimensions();

    // Event listener for window resize
    window.addEventListener("resize", updateDimensions);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.HeaderLeft}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="tinigLogo"></Image>
        </Link>
        <ul className={styles.HeaderNav}>
          <li className={styles.HeaderNavLinks}>
            <p onClick={showBihasa}>FSL to Speech</p>
          </li>
          <li className={styles.HeaderNavLinks}>
            <p onClick={showDikta}>Speech to FSL</p>
          </li>
          <li className={styles.HeaderNavLinks}>
            <p onClick={showSignayo}>Movie Clips</p>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/dictionary">Dictionary</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/features">Features</Link>
          </li>

          {/* <li className={styles.HeaderNavLinks}>
            <Link href="/mission&vision">Mission and Vision</Link>
          </li> */}
        </ul>
      </div>
      {/* <div className={styles.HeaderRight}>
        <Image src={notif} alt="notificationIcon"></Image>
        <Image src={profile} alt="profileImage"></Image>
      </div> */}

      {/* burger menu */}
      <div id="outer-container" className={styles.burger}>
        <Menu styles={styles2}>
          <Link id="product" className="menu-item" href="/product">
            FSL to Speech
          </Link>
          <Link id="speech" className="menu-item" href="/speech">
            Speech to FSL
          </Link>
          <Link id="dictionary" className="menu-item" href="/dictionary">
            Dictionary
          </Link>
          <Link id="features" className="menu-item" href="/features">
            Features
          </Link>
          <Link id="team" className="menu-item" href="/team">
            Team
          </Link>
        </Menu>
      </div>

      {/* pop up */}
      <Bihasa isVisible={isVisible} setIsVisible={setIsVisible} />
      <Dikta isVisible={isVisible1} setIsVisible={setIsVisible1} />
      <Signayo isVisible={isVisible2} setIsVisible={setIsVisible2} />
    </div>
  );
}
export default Header;
