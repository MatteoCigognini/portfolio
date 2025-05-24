import Link from 'next/link'
import Breakpoint from '../Breakpoint/Breakpoint'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Button from '../Buttons/Button'

export default function Header({ lang, dict, activeLink = "home" }) {
    return <>
        <header className={styles.header}>
            <Breakpoint>
                <div className={styles.headerContainer}>
                    <h1 className={styles.title}>&lt;<strong>Cigo</strong>&gt;</h1>
                    <nav className={styles.nav}>
                        <Link href={`/${lang}`} className={`${styles.link} ${activeLink === 'home' ? styles.active : ''}`}>Home</Link>
                        <Link href={`/${lang}/projects`} className={`${styles.link} ${activeLink === 'projects' ? styles.active : ''}`}>{dict.projects.title}</Link>
                        <Link href={`/${lang}/blog`} className={`${styles.link} ${activeLink === 'blog' ? styles.active : ''}`}>Blog</Link>
                        <Button variant='primary'>{dict.contactMe}</Button>

                        {/* Social */}
                        <div className={styles.socials}>
                            <Link href={`https://github.com/MatteoCigognini`} target='_blank' className={styles.socialIcon}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link href={`https://www.facebook.com/cigognini.matteo`} target='_blank' className={styles.socialIcon}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link href={`https://www.linkedin.com/in/cigognini-matteo`} target='_blank' className={styles.socialIcon}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link href={`https://www.instagram.com/cigognini.matteo`} target='_blank' className={styles.socialIcon}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </div>
                    </nav>
                </div>
            </Breakpoint>
        </header>
    </>
}