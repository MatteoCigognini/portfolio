import Header from '@/app/components/Header/Header';
import { getDictionary } from '../dictionaries';
import styles from './page.module.css'
import MainContainer from '@/app/components/Containers/MainContainer';
import Footer from '@/app/components/Footer/Footer';
import { PROJECTS } from '@/data/projects';
import ProjectCard from '@/app/components/Cards/ProjectCard';
import Section from '@/app/components/Sections/Section';

export default async function Page({ params }) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return <>
        <Header lang={lang} dict={dict} activeLink="projects" />
        <MainContainer>
            <Section
                title={dict.projects.title}
                description={dict.projects.description}>
                {/* Progetti */}
                <div className={styles.projects}>{PROJECTS.map((p, i) => <ProjectCard
                    key={i}
                    name={p.name}
                    description={dict.projects.items[p.slug].description}
                    skills={p.skills}
                    link={p.link}
                    image={p.showImage ? `/images/projects/${p.slug}.webp` : undefined}
                />)}</div>
            </Section>
        </MainContainer>
        <Footer lang={lang} dict={dict} />
    </>
}