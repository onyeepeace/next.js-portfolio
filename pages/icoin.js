import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

function Icoin() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <section className={`${styles.scroll_card} ${styles.welcome}`}>
                    <p>What is icoin</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.about_only}`}>
                    <p>See icoin</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.about_content}`}>
                    <p>Challenges</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.project_only}`}>
                    <p>New look</p>
                </section>

                <section className={`${styles.scroll_card} ${styles.project_one}`}>
                    <p>learnings</p>
                </section>
            </Layout>
        </div>
    )
}

export default Icoin
