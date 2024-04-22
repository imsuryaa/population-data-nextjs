import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { numberWithCommas } from "./utils";
import SEO from "./components/SEO";

export default function Home() {
  const [counter, setCounter] = useState(329725481);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <SEO
        pageTitle="Population.io"
        pageDescription="Generated through Nisum tech"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Population.io</a>
        </h1>
        <p className={styles.description}>
          {numberWithCommas(counter)} HUMANS RECORDED
        </p>
        <div className={styles.grid}>
          <Link href="/population" className={styles.card}>
            <h2>Population Data &rarr;</h2>
            <p>Find in-depth information about Population around world.</p>
          </Link>
          <Link href="/" className={styles.card}>
            <h2>Lorem &rarr;</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Link>
        </div>
        <p className={styles.description}>
          Built with <span style={{ color: "red" }}>&hearts;</span> Next.js,
          Material-UI
        </p>
      </main>
    </div>
  );
}
