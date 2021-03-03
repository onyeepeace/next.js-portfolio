import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

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
                {/* <div className={styles.scroll_child}> */}
                <div className={`${styles.scroll_wheel} ${styles.scroller}`}>
                    <section className={`${styles.scroll_card} ${styles.welcome}`}>welcome
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                    <section className={`${styles.scroll_card} ${styles.about_only}`}>about only
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                    <section className={`${styles.scroll_card} ${styles.about_content}`}>about content
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                    <section className={`${styles.scroll_card} ${styles.project_only}`}>project only
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                    <section className={`${styles.scroll_card} ${styles.project_one}`}>project 1
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                    <section className={`${styles.scroll_card} ${styles.project_two}`}>project 2
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                    <section className={`${styles.scroll_card} ${styles.contact}`}>contact
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus nisi autem veritatis consequuntur vel ad tenetur incidunt atque est magni tempore aperiam, obcaecati quae ab deserunt ratione libero! Omnis doloremque debitis veniam culpa sapiente, aspernatur eius hic error magni voluptate, fuga neque iusto expedita! Explicabo odit et sint ipsum quidem omnis. Dolor fugiat cum atque? Vitae perferendis, nobis iusto excepturi iure quod, tempora ipsum, quam incidunt veniam totam nulla voluptate magni nihil! Rerum nisi sed corporis quae maxime perferendis recusandae, adipisci facere eos nostrum doloribus asperiores repellendus porro blanditiis provident. Odit dolores ipsum magnam ad provident nisi in enim.</p></section>
                </div>
                {/* </div> */}
            </main>
        </div>
    )
}
