import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container} style={{ backgroundImage: "url('public/index.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.9" }}>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>AI - ML</h1>
          <h1>PROJECTS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Soham Sarkar</h1>
            <h6 className={styles.bio}>AI-ML Engineer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
