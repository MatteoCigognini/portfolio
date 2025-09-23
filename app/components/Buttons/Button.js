'use client'
import styles from './Button.module.css'

export default function Button({ title, children, variant = 'primary', disabled = false, onClick, style = {} }) {
    const handleClick = () => {
        if (onClick)
            onClick();
    }

    return <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={handleClick}
        title={title || ''}
        style={{ ...style }}
    >{children}</button>
}