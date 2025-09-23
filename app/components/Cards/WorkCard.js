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
            {link !== undefined && <Link href={link} className={styles.link} target='_blank'>
                <Button variant='grey' style={{ 
                    height: '35px',
                    width: '100%', 
                    fontSize: 'var(--font-size-sm)'
                }}>{dict.open} <FontAwesomeIcon icon={faExternalLink} /></Button>
            </Link>}
            {link === undefined && <span className={styles.noLink}>--</span>}
        </div>
    </div>
}