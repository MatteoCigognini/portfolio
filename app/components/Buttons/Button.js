'use client'
import styles from './Button.module.css'

export default function Button({ title, children, variant = 'primary', disabled = false, onClick }) {
    const handleClick = () => {
        if (onClick)
            onClick();
    }

    return <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={handleClick}
        title={title || ''}
    >{children}</button>
}