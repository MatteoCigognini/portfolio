import styles from './Tag.module.css'

export default function Tag({ image, text }) {
    return <div className={styles.tag}>
        {image && <img src={image.url} alt={image.alt} className={styles.img} />}
        <p className={styles.text}>{text}</p>
    </div>
}