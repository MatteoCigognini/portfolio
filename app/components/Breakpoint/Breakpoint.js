import styles from './Breakpoint.module.css'

export default function Breakpoint({ children }) {
    return <div className={styles.breakpoint}>{children}</div>
}