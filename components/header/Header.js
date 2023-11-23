import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import notif from "../../assets/notif.png";
import profile from "../../assets/profile.png";
import Link from "next/link";
// hamburger menu for mobile
import { slide as Menu } from "react-burger-menu";

function Header() {
  const showSettings = (event) => {
    event.preventDefault();
    // Add your settings logic here
  };
  var styles2 = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
      background: "blue",
    },
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.HeaderLeft}>
        <Link href="/">
          <Image src={logo} alt="tinigLogo"></Image>
        </Link>
        <ul className={styles.HeaderNav}>
          <li className={styles.HeaderNavLinks}>
            <Link href="/product">Translate</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/features">Features</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/mission&vision">Mission and Vision</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/team">Team</Link>
          </li>
        </ul>
      </div>
      <div className={styles.HeaderRight}>
        <Image src={notif} alt="notificationIcon"></Image>
        <Image src={profile} alt="profileImage"></Image>
      </div>

      {/* burger menu */}
      <div id="outer-container" className={styles.burger}>
        <Menu styles={styles2}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </div>
    </div>
  );
}
export default Header;
