import Link from 'next/link'
import styles from './ProjectCard.module.css'
import Tag from '../Tags/Tag'

export default function ProjectCard({ name, description, skills, link, image }) {
    return <div className={styles.card}>
        <div className={styles.image}></div>
        <div className={styles.content}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.skills}>{skills.map((s, i) => <div key={i} className={styles.skill}>{s}</div>)}</div>
            {link !== undefined && <Link href={link} className={styles.link} target='_blank'>Apri</Link>}
            {link === undefined && <span className={styles.noLink}>--</span>}
        </div>
    </div>
}