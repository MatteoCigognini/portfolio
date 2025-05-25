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
import TimelineCard from '../components/Cards/TimelineCard';

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
      </Breakpoint>

      {/* Stack tecnologico */}
      <Section
        title={dict.techStack.title}
        description={dict.techStack.description}
      >
        <div className={styles.technologies}>{TECHNOLOGIES.filter(t => !t.learning).map(t => <TechnologyCard
          key={t.slug}
          dict={dict}
          name={t.name}
          description=''
          logo={`/images/technologies/${t.slug}.webp`}
          level={t.level}
        />)}</div>
      </Section>

      {/* Tecnologie che sto imparando */}
      <Section
        title={dict.techStack.learning}
        description={''}
      >
        <div className={styles.technologies}>{TECHNOLOGIES.filter(t => t.learning).map(t => <TechnologyCard
          key={t.slug}
          dict={dict}
          name={t.name}
          description=''
          logo={`/images/technologies/${t.slug}.webp`}
          level={t.level}
        />)}</div>
      </Section>

      {/* Tools */}
      <Section
        title={dict.tools.title}
        description={dict.tools.description}
      >
        <div className={styles.technologies}>{TOOLS.map(t => <TechnologyCard
          key={t.slug}
          dict={dict}
          name={t.name}
          description=''
          logo={`/images/technologies/${t.slug}.webp`}
          level={t.level}
        />)}</div>
      </Section>
    </MainContainer>
    <Footer lang={lang} dict={dict} />
  </>
}