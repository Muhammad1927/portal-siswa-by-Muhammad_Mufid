import styles from "@/styles/Dashboard.module.css";
import { dmSans } from "@/styles/fonts";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={`${dmSans.className} ${styles.sidebar}`}>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
      </div>

      <div className={`${dmSans.className} ${styles.header}`}>
        <h1 className={`${dmSans.className} ${styles.h1}`}>Judul Dashboard</h1>
        <button className={`${dmSans.className} ${styles.btn}`}>
          <p>Sign Out</p>
        </button>
      </div>
    </div>
  );
}
