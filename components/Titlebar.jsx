import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <div className={styles.windowButtons}>
        <span className={styles.close}></span>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
      </div>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Portfolio - Soham Sarkar</p>
    </section>
  );
};

export default Titlebar;
