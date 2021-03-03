import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import navStyles from './layout.module.css'

export default function Layout({ children }) {
    function handleClick(e) {
        e.preventDefault();
        const mainNav = document.getElementById("js-menu");
        mainNav.classList.toggle(`${navStyles.active}`);
        if (mainNav.classList.contains(`${navStyles.active}`)) {
            e.target.innerHTML = `x`;
        }
        else {
            e.target.innerHTML = `&#9776;`;
        }
    }

    useEffect(() => {
        var item = document.getElementsByTagName('main')[0];

        (function () {
            function scrollHorizontally(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                item.scrollLeft -= (delta * 40);
                e.preventDefault();
            }
            if (item.addEventListener) {
                item.addEventListener('mousewheel', scrollHorizontally, false);
                item.addEventListener('DOMMouseScroll', scrollHorizontally, false);
            } else {
                item.attachEvent('onmousewheel', scrollHorizontally);
            }
        })();
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Onyee Peace</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.scroll_parent}>
                <header className={navStyles.header}>
                    <nav className={navStyles.navbar}>
                        <span
                            className={navStyles.navbarToggle}
                            id="js-navbar-toggle"
                            onClick={handleClick}>
                            &#9776;
                    </span>

                        <div className="left-nav">
                            <Link href="/">
                                <a className={navStyles.navLinks}>Peace.</a>
                            </Link>
                        </div>

                        <div className={navStyles.rightNav}>
                            <ul className={navStyles.mainNavbar} id="js-menu">
                                <li className={navStyles.mainNavlist}>
                                    <Link href="/">
                                        <a className={navStyles.navLinks}>Home</a>
                                    </Link>
                                </li>

                                <li className={navStyles.mainNavlist}>
                                    <Link href="/about">
                                        <a className={navStyles.navLinks}>About</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className={`${styles.scroll_wheel} ${styles.scroller}`}>
                    {children}
                </div>
            </main>
        </div>
    )
}
