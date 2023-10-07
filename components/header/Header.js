import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import notif from "../../assets/notif.png";
import profile from "../../assets/profile.png";
import Link from "next/link";
function Header() {
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
            <Link href="/product">Dictionary</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/product">Translate</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/product">Contribute</Link>
          </li>
          <li className={styles.HeaderNavLinks}>
            <Link href="/product">Resources</Link>
          </li>
        </ul>
      </div>
      <div className={styles.HeaderRight}>
        <Image src={notif} alt="notificationIcon"></Image>
        <Image src={profile} alt="profileImage"></Image>
      </div>
    </div>
  );
}
export default Header;
