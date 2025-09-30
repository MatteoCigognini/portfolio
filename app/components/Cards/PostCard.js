"use effect";
import Link from 'next/link';
import styles from './PostCard.module.css'

export default function PostCard({ lang, id, title, description, image, date, tags }) {
    return <div className={styles.card}>
        <Link href={`/${lang}/blog/post/${id}`}>
            <div className={styles.image}>
                {image && <img src={image} className={styles.img} />}
            </div>
        </Link>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
        </div>
    </div>
}