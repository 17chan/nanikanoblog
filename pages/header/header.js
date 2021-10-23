import React from 'react';

import Link from "next/link";
import styles from "./header.module.scss";
// import styles from "../index";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_content}>

                    <Link href={"/"}><a className={styles.blogtitle}><span>NANIKANO BLOG</span></a></Link>
                    <nav>
                        <div className={styles.right}>
                            <Link href="/"><a>NEW</a></Link>
                        </div>
                        <div className={styles.left}>
                            <Link href="../blog/design/"><a>DESIGN</a></Link>
                            <Link href="../blog/tech/"><a>TECH</a></Link>
                            <Link href="../blog/other/"><a>OTHER</a></Link>
                        </div>
                    </nav>

                </div>
            </header>
        </>
    )
}