import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.isActive)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.isActive)
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
