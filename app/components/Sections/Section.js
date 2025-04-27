import formatText from '@/utils/textUtils'
import Breakpoint from '../Breakpoint/Breakpoint'
import styles from './Section.module.css'

export default function Section({ title, description, variant = 'default', columns = 1, children }) {
    return <section
        className={`${styles.section} ${styles[variant]}`}
    >
        <Breakpoint>
            <div className={styles.layout} style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`
            }}>
                <div className={styles.info}>
                    <h3 className={styles.title}>{formatText(title)}</h3>
                    <p className={styles.description}>{formatText(description)}</p>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </Breakpoint>
    </section>
}