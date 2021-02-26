import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Icoin() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Link href="/">
                    <a>Peace</a>
                </Link>
            </header>

            <main>
                <h1>Icoin is live here!</h1>
            </main>
        </div>
    )
}

export default Icoin
