import Link from 'next/link'
import styles from './WorkCard.module.css'
import Button from '../Buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

export default function WorkCard({ dict, name, description, link, image }) {
    return <div className={styles.card}>
        <div className={styles.image}>
            {image && <img src={image} className={styles.img} alt={name} />}
        </div>
        <div className={styles.content}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
}