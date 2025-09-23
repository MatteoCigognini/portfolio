import Link from 'next/link'
import styles from './WorkCard.module.css'

export default function WorkCard({ name, description, link, image }) {
    return <div className={styles.card}>
        <div className={styles.image}>
            {image && <img src={image} className={styles.img} alt={name} />}
        </div>
        <div className={styles.content}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
            {link !== undefined && <Link href={link} className={styles.link} target='_blank'>Apri</Link>}
            {link === undefined && <span className={styles.noLink}>--</span>}
        </div>
    </div>
}