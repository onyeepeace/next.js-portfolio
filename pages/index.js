import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className={styles.left}>
                    <Link href="/">
                        <a className={styles.logo}>Hi.</a>
                    </Link>
                </div>
                <Link href="/about">
                    <a>About me</a>
                </Link>
            </header> */}

            <main>
                <section className={styles.hero}>
                    <div className="introduction">
                        <h1 className={styles.name}>Onyee</h1>
                        <h1 className={styles.name}>Peace</h1>
                        <div className={styles.bio}>
                            <p className={styles.info}>JavaScript Frontend Developer</p>
                            <p className={styles.info}>Baker</p>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <a href="http://twitter.com/onyeepeace" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="http://twitter.com/onyeepeace" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="http://linkedin.com/in/onyeepeace" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </section>

                <section className="projects">
                    <p>Here are my projects</p>
                    <p>Have a look</p>
                    <Link href="/retrogram">
                        <a>Retrogram</a>
                    </Link>
                    <Link href="/icoin">
                        <a>Icoin</a>
                    </Link>
                </section>

                <section className="contact">
                    <h1>Come talk to me! I love to interact!</h1>
                </section>
            </main>
        </div>
    )
}
