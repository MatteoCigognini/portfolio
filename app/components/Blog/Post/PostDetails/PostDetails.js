import styles from './PostDetails.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Tag from '@/app/components/Tags/Tag';

export default function PostDetails({ author, post, category }) {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://blog.matteocigognini.it/posts/${post.id}`)}`
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://blog.matteocigognini.it/posts/${post.id}`)}&text=${encodeURIComponent(post.title)}`
    const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`Ciao, leggi qui: https://blog.matteocigognini.it/posts/${post.id}`)}`
    const emailShareUrl = `mailto:?subject=${encodeURIComponent(post.title)}&body${encodeURIComponent(`Ciao, leggi questo articolo interessante: https://blog.matteocigognini.it/posts/${post.id}`)}`

    return <div className={styles.details}>
        <div className={styles.author}>
            <div className={styles.avatar} style={{ backgroundImage: `url('${author.avatar}')` }}></div>
            <div className={styles.container}>
                <span className={styles.name}>{author.name}</span>
                <Link href={`/authors/${author.nickname}`} className={styles.nickname}>@{author.nickname}</Link>
                <span className={styles.role}>{author.role}</span>
            </div>
        </div>
        <div className={styles.detailSection}>
            <span className={styles.title}>Pubblicato in:</span>
            <Link className={styles.categoryLink} href={`/categories/${post.category}`}>{category.title}</Link>
        </div>
        <div className={styles.detailSection}>
            <span className={styles.title}>Condividi questo articolo:</span>
            <div className={styles.shareOptions}>
                <a href={facebookShareUrl} target='_blank' rel='noopener noreferrer'>
                    <button className={styles.shareOption}><FontAwesomeIcon icon={faFacebook} /></button>
                </a>
                <a href={twitterShareUrl} target='_blank' rel='noopener noreferrer'>
                    <button className={styles.shareOption}><FontAwesomeIcon icon={faXTwitter} /></button>
                </a>
                <a href={whatsappShareUrl} target='_blank' rel='noopener noreferrer'>
                    <button className={styles.shareOption}><FontAwesomeIcon icon={faWhatsapp} /></button>
                </a>
                <a href={emailShareUrl} target='_blank' rel='noopener noreferrer'>
                    <button className={styles.shareOption}><FontAwesomeIcon icon={faEnvelope} /></button>
                </a>
            </div>
        </div>
        <div className={styles.detailSection}>
            <span className={styles.title}>Tags:</span>
            <div className={styles.tags}>{post.tags.map(tag => <Tag key={`tag-${tag.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-+/g, "-")}`} name={tag} />)}</div>
        </div>
    </div>;
}