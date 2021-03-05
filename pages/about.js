import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'
import styles from '@/styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <section className={`${styles.scroll_card} ${styles.welcome}`}>
                    <h1>I'm Onyee Peace,</h1>
                </section>

                <section className={`${styles.scroll_card} ${styles.about_only}`}>
                    <p>I'm a JavaScript frontend developer that enjoys turning design to code and matching design to final UI. I'm currently focused on building products with ReactJS and more specifically NextJS. I'm also working with animations because they spice up the feel of products.</p>
                    <p>Outside of coding, I'm obsessed with baking cakes and bread and I can't help myself. I spend time watching tutorials on youtube and trying out new recipes. Funfact: I used to be a baker right after high school and I stopped after a year. I still look forward to becoming a pastry chef and attending Le Cordon Bleu!</p>
                </section>
            </Layout>
        </div>
    )
}
