import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <section className={`${styles.scroll_card} ${styles.welcome}`}>
                    <div className={styles.hero_container}>
                        <div className={styles.hero}>
                            <div className={styles.first_line}>
                                <h1 className={styles.hello}>Hello,</h1>
                                <p className={styles.me}>I'm a JavaScript frontend developer</p>
                            </div>
                            <h1 className={styles.greeting}>welcome to my</h1>
                            <div className={styles.last_line}>
                                <p className={styles.stack}>I'm currently working with ReactJS and learning animations.</p>
                                <h1 className={styles.my_space}>portfolio</h1>
                            </div>
                            <div className={styles.see_more}>
                                <p>scroll to see more</p>
                                <hr />
                            </div>
                        </div>
                    </div>
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
