"use client";
import Link from 'next/link'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ name, slug, description, link }) {
    return <div className={styles.card}>
        <Link href={link || '#'} target='_blank'>
            <div className={styles.icon}>
                <img src={`/images/projects/${slug}.webp`} className={styles.img} />
            </div>
        </Link>
        <div className={styles.content}>
            <h2 className={styles.title}>{name}</h2>
            {description && <p className={styles.description}>{description}</p>}
        </div>
    </div>
}