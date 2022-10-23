import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a
          className={router.pathname === "/" ? styles.active : styles.inactive}
        >
          Home
        </a>
      </Link>
      <Link href="/banana">
        <a
          className={
            router.pathname === "/banana" ? styles.active : styles.inactive
          }
        >
          banana
        </a>
      </Link>
      <Link href="/movies">
        <a
          className={
            router.pathname === "/movies" ? styles.active : styles.inactive
          }
        >
          movies
        </a>
      </Link>
      <Link href="/movies/all">
        <a
          className={
            router.pathname === "/movies/all" ? styles.active : styles.inactive
          }
        >
          ALL
        </a>
      </Link>
      <style jsx>{`
        something {
          background-color: tomato;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
