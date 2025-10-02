"use client";

import Link from 'next/link'
import Breakpoint from '../Breakpoint/Breakpoint'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Button from '../Buttons/Button'
import { faBars, faMessage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

export default function Header({ lang, dict, activeLink = "home" }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768 ? true : false);
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMobileMenuButtonClick = () => {
        console.log('jawidjwi');
        setIsMenuMobileOpen(prev => !prev);
    }

    return <>
        <header className={styles.header}>
            <Breakpoint>
                <div className={styles.headerContainer}>
                    <button className={styles.mobileMenuButton} onClick={handleMobileMenuButtonClick}><FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} /></button>
                    <h1 className={styles.title}>&lt;<strong>Cigo</strong>&gt;</h1>
                    <nav className={styles.nav}>
                        <Link href={`/${lang}`} className={`${styles.link} ${styles.noMobile} ${activeLink === 'home' ? styles.active : ''}`}>Home</Link>
                        <Link href={`/${lang}/projects`} className={`${styles.link} ${styles.noMobile} ${activeLink === 'projects' ? styles.active : ''}`}>{dict.projects.title}</Link>
                        <Link href={`/${lang}/blog`} className={`${styles.link} ${styles.noMobile} ${activeLink === 'blog' ? styles.active : ''}`}>Blog</Link>
                        <Button variant='primary'>{dict.contactMe}</Button>

                        {/* Social */}
                        <div className={`${styles.socials} ${styles.noMobile}`}>
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

        {isMobileMenuOpen && createPortal(<div className={styles.backdrop}>
            <div className={styles.mobileMenu}>
                <h1 className={styles.title}>&lt;<strong>Cigo</strong>&gt;</h1>

                {/* Navigazione principale */}
                <nav className={styles.mobileNav}>
                    <Link href={`/${lang}`} className={`${styles.link} ${activeLink === 'home' ? styles.active : ''}`}>Home</Link>
                    <Link href={`/${lang}/projects`} className={`${styles.link} ${activeLink === 'projects' ? styles.active : ''}`}>{dict.projects.title}</Link>
                    <Link href={`/${lang}/blog`} className={`${styles.link} ${activeLink === 'blog' ? styles.active : ''}`}>Blog</Link>
                </nav>

                {/* Socials */}
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
            </div>
            <div className={styles.closingZone} onClick={() => setIsMenuMobileOpen(false)}></div>
        </div>, document.body)}
    </>
}