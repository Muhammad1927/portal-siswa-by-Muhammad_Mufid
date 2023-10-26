import styles from "@/styles/Login.module.css";
import { dmSans } from "@/styles/fonts";

export default function loginTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.dc}>
        <h1 className={`${dmSans.className} ${styles.textWhite}`}>Regestrasi</h1>
        <p className={`${dmSans.className} ${styles.p1}`}>
          Enter your Name, NIS and password to sign in!
        </p>
        <h4 className={`${dmSans.className} ${styles.h4_email}`}>Name*</h4>
        <input
          className={`${dmSans.className} ${styles.inputemail}`}
          type="text"
          Name=""
          required=""
          placeholder="Enter your NAME"
        />
        <h4 className={`${dmSans.className} ${styles.h4_email}`}>Email*</h4>
        <input
          className={`${dmSans.className} ${styles.inputemail}`}
          type="text"
          NIS=""
          required=""
          placeholder="Enter your NIS"
        />
        <h4 className={`${dmSans.className} ${styles.h4_email}`}>password*</h4>
        <input
          className={`${dmSans.className} ${styles.inputemail}`}
          type="password"
          password=""
          required=""
          placeholder="Min. 8 characters"
        />
        <button className={`${dmSans.className} ${styles.btn}`}>
          <p>Sign In</p>
        </button>

        <p className={`${dmSans.className} ${styles.p2}`}>
          Not registered yet?{" "}
          <b className={`${dmSans.className} ${styles.bp}`}>
            Create an Account
          </b>
        </p>
      </div>
    </div>
  );
}
