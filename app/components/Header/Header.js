import Link from 'next/link'
import Breakpoint from '../Breakpoint/Breakpoint'
import styles from './Header.module.css'

export default function Header({ lang, dict }) {
    return <>
        <header className={styles.header}>
            <Breakpoint>
                <div className={styles.headerContainer}>
                    <h1 className={styles.title}>&lt;<strong>Cigo</strong>&gt;</h1>
                    <nav className={styles.nav}>
                        <Link href={`/${lang}`} className={styles.link}>Home</Link>
                        <Link href={`/${lang}/projects`} className={styles.link}>{dict.projects}</Link>
                        <Link href={`/${lang}/contacts`} className={styles.link}>{dict.contacts}</Link>
                        <Link href={`/${lang}/blog`} className={styles.link}>Blog</Link>
                    </nav>
                </div>
            </Breakpoint>
        </header>
    </>
}