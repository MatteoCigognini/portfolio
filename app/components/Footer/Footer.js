import formatText from '@/utils/textUtils'
import Breakpoint from '../Breakpoint/Breakpoint'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer({ lang, dict }) {
    return <footer className={styles.footer}>
        <Breakpoint>
            <div className={styles.idea}>
                <p className={styles.title}>{formatText(dict.haveAnIdea.title)}</p>
                <p className={styles.description}>{dict.haveAnIdea.description}</p>
                <Link href={`mailto:work.cigognini.matteo@gmail.com`} className={styles.mailLink}>work.cigognini.matteo@gmail.com</Link>
            </div>
        </Breakpoint>
    </footer>
}