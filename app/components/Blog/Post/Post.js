"use client";
import { formatDate } from '@/utils/dateUtils';
import styles from './Post.module.css';
import { useEffect, useState } from 'react';

const wpm = 250;

export default function Post({ date, content }) {
    const [contentLength, setContentLength] = useState(0);

    useEffect(() => {
        setContentLength(content.replace(/[#*_`~\-+\\|!]/g, '').replace(/#{1,6} /g, '').split(/\s+/).length);
    }, [content]);

    return <article className={styles.post}>
        <div className={styles.info}>
            <span className={styles.text}>Tempo di lettura: {Math.round(contentLength / wpm)} minuti</span>
            <span className={styles.text}>{formatDate(date)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
}