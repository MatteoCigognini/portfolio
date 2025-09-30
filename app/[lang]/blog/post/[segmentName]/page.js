import styles from './page.module.css';
import Breakpoint from '@/app/components/Breakpoint/Breakpoint';
import Footer from '@/app/components/Footer/Footer';
import { getPostData, findPostByID } from '@/lib/posts';
import { notFound } from 'next/navigation';
import authors from '@/data/authors';
import categories from '@/data/categories';
import { getDictionary } from '@/app/[lang]/dictionaries';
import MainContainer from '@/app/components/Containers/MainContainer';
import Header from '@/app/components/Header/Header';
import Post from '@/app/components/Blog/Post/Post';
import PostDetails from '@/app/components/Blog/Post/PostDetails/PostDetails';


export async function generateMetadata({ params, searchParams }, parent) {
    const slug = (await params).segmentName;

    if (!findPostByID(slug))
        notFound();
    const post = await getPostData(slug);
    const author = authors.filter(a => a.nickname == post.author)[0];

    return {
        title: `${post.title} | Techigo`,
        description: post.description,
        applicationName: 'Techigo',
        referrer: 'origin-when-cross-origin',
        keywords: post.tags,
        authors: [{ name: author.name }],
        creator: 'Matteo Cigognini',
        publisher: author.name,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        openGraph: {
            title: `${post.title} | Techigo`,
            description: post.description,
            images: post.image
        }
    }
}

export default async function Page({ params }) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    const slug = (await params).segmentName;
    const post = await getPostData(slug);
    const category = categories.filter(c => c.slug === post.category)[0];
    const author = authors.filter(a => a.nickname === post.author)[0];

    return (
        <>
            <Header lang={lang} dict={dict} activeLink="blog" />
            <MainContainer>
                <Breakpoint>
                    <section className={styles.content}>
                        <Post
                            content={post.contentHtml}
                            date={post.date}
                        />
                    </section>
                </Breakpoint>
            </MainContainer>
            <Footer lang={lang} dict={dict} />
        </>
    )
}