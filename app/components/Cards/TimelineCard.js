import styles from './TimelineCard.module.css'

export default function TimelineCard({ title, description, year }) {
    return <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>{description}</div>
        <p className={styles.year}>{year}</p>
    </div>
}