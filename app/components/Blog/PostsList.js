import Link from "next/link";
import styles from './PostsList.module.css';
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "../Cards/PostCard";

export default async function PostsList({ lang, category, author, limit, search }) {
    const posts = getSortedPostsData();
    var filteredPosts = posts.filter(p => p.category === category || !category)

    if (limit)
        filteredPosts = filteredPosts.slice(0, limit);

    if (search)
        filteredPosts = filteredPosts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()) || p.tags.filter(t => t.toLowerCase().includes(search.toLowerCase())).length > 0);

    return <div className={styles.posts}>{filteredPosts.map((post, index) => <PostCard
        key={`post-${index}`}
        lang={lang}
        id={post.id}
        title={post.title}
        description={post.description}
        image={post.image}
        date={post.date}
        tags={post.tags}
    />)}</div>
}