import { useDarkMode } from "../DarkModeProvider";
import styles from "./Header.module.css";

export default function Header() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={
        styles.headerWrapper +
        (darkMode ? ` ${styles.dark}` : ` ${styles.light}`)
      }
    >
      <h1 className={styles.headerTitle}>{"Curtis Loucks"}</h1>
    </div>
  );
}
