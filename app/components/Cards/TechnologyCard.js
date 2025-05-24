import styles from './TechnologyCard.module.css'

export default function TechnologyCard({ dict, name, description, logo, level }) {
    return <div className={styles.card}>
        <div className={styles.logo}>
            <img src={logo} alt={name} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.level}>{dict.fields.level}: <strong style={{color: level === 5 ? 'var(--color-primary)' : 'var(--foreground)'}}>{level}/5</strong></p>
    </div>
}