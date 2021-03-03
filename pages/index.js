import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <section className={`${styles.scroll_card} ${styles.welcome}`}>
                    <p>Welcome</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.about_only}`}>
                    <p>About only</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.about_content}`}>
                    <p>About content</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.project_only}`}>
                    <p>Project only</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.project_one}`}>
                    <Link href="/retrogram">
                        <a>Retrogram</a>
                    </Link>
                </section>

                <section className={`${styles.scroll_card} ${styles.project_two}`}>
                    <Link href="/icoin">
                        <a>Icoin</a>
                    </Link>
                </section>

                <section className={`${styles.scroll_card} ${styles.contact}`}>
                    <p>contact</p>
                </section>
            </Layout>
        </div>
    )
}
