import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <a href="#">HOME</a>
            <a href="#">ACERCA</a>
          </nav>
        </div>
    </main>
  );
  
}
