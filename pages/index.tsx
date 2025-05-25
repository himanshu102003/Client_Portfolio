import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

// Dynamically import components with no SSR
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/Client_Portfolio' : '';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Jahnavi Kanduri | Portfolio</title>
        <meta name="description" content="Jahnavi Kanduri's Portfolio - Web Developer & Designer" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <base href={`${basePath}/`} />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <Hero />
        </section>
        <section className={styles.section}>
          <About />
        </section>
        <section className={styles.section}>
          <Experience />
        </section>
        <section className={styles.section}>
          <Projects />
        </section>
        <section className={styles.section}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
