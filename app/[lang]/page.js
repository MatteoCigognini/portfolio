import Breakpoint from '../components/Breakpoint/Breakpoint';
import MainContainer from '../components/Containers/MainContainer';
import Header from '../components/Header/Header';
import Section from '../components/Sections/Section';
import { getDictionary } from './dictionaries';
import styles from './page.module.css'
import Footer from '../components/Footer/Footer';
import formatText from '@/utils/textUtils';
import { TECHNOLOGIES, TOOLS } from '@/data/technologies';
import TechnologyCard from '../components/Cards/TechnologyCard';
import Tag from '../components/Tags/Tag';
import { WORKS } from '@/data/works';
import WorkCard from '../components/Cards/WorkCard';

export default async function HomePage({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return <>
    <Header lang={lang} dict={dict} />
    <MainContainer>
      <Breakpoint>
        {/* Banner */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.hello}>{dict.hello} 👋</p>
            <h1 className={styles.title}>{formatText(dict.intro)}</h1>
            <h2 className={styles.role}>Full Stack Dev • Coffee lover ☕</h2>
          </div>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img src='/images/profile.webp' alt='Matteo Cigognini' />
            </div>
            <div className={styles.image}>
              <img src='/images/profile-2.webp' alt='Matteo Cigognini' />
            </div>
            <div className={styles.image}>
              <img src='/images/profile-3.webp' alt='Matteo Cigognini' />
            </div>
            <div className={styles.image}></div>
          </div>
        </section>

        {/* Stack tecnologico */}
        <div className={styles.technologies}>
          {TECHNOLOGIES.filter(t => !t.learning).map((t, i) => <Tag
            key={t.slug}
            image={{
              url: `/images/technologies/${t.slug}.webp`,
              alt: t.name
            }}
            text={t.name}
          />)}
        </div>
      </Breakpoint>

      {/* Lavori */}
      <Section
        title={dict.works.title}
        description={dict.works.description}
      >
        <div className={styles.works}>{WORKS.map(w => <WorkCard
          key={w.slug}
          name={w.name}
          description={dict.works.items[w.slug].description}
          link={w.link}
          image={w.showImage ? `/images/works/${w.slug}.webp` : undefined}
        />)}</div>
      </Section>

      {/* Progetti */}
      <Section
        title={dict.projects.title}
        description={dict.projects.description}
      >

      </Section>

      {/* Ultimi articoli */}
      <Section title={dict.blog.lastPosts.title} description={dict.blog.lastPosts.description}></Section>
    </MainContainer>
    <Footer lang={lang} dict={dict} />
  </>
}