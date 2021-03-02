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

            <main>
                <section className={styles.hero}>
                    <div className={styles.top}>
                        <Link href="/about">
                            <a className={styles.about}>
                                About Me
                            </a>
                        </Link>
                        <div className="introduction">
                            <h1 className={styles.name}>Onyee</h1>
                            <h1 className={styles.name}>Peace</h1>
                            <div className={styles.bio}>
                                <p className={styles.info}>JavaScript Frontend Developer</p>
                                <p className={styles.info}>Baker</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.social}>
                            <a href="http://twitter.com/onyeepeace" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="http://github.com/onyeepeace" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="http://linkedin.com/in/onyeepeace" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className={styles.scroll}>
                            <p className={styles.scroll_text}>scroll down</p>
                        </div>
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
