import { PROJECTS } from '@/data/projects';
import Breakpoint from '../components/Breakpoint/Breakpoint';
import Button from '../components/Buttons/Button';
import MainContainer from '../components/Containers/MainContainer';
import Header from '../components/Header/Header';
import Section from '../components/Sections/Section';
import Tag from '../components/Tags/Tag';
import { getDictionary } from './dictionaries';
import styles from './page.module.css'
import { SKILLS } from '@/data/skills';
import ProjectCard from '../components/Cards/ProjectCard';
import Footer from '../components/Footer/Footer';

export default async function HomePage({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return <>
    <Header lang={lang} dict={dict} />
    <MainContainer>
      {/* Banner */}
      <section className={styles.hero}>
        <Breakpoint>
          <div className={styles.heroContent}>
            <div className={styles.image}>
              <img src="/images/profile.webp" className={styles.img} />
            </div>
            <h1 className={styles.title}>Matteo <strong>Cigo</strong>gnini</h1>
            <h2 className={styles.role}>Full Stack Developer</h2>
            <h2 className={styles.caption}>{dict.roleCaption}</h2>
            <div className={styles.actions}>
              <Button variant='grey'>{dict.viewWorks}</Button>
              <Button>{dict.contactMe}</Button>
            </div>
          </div>
        </Breakpoint>
      </section>

      {/* Skills */}
      <Section
        title={dict.mySkills}
        description={dict.skillsCaption}
        variant='grey'
        columns={2}
      >
        <div className={styles.skills}>{SKILLS.map((s, i) => <Tag key={i} text={s} />)}</div>
      </Section>

      {/* Lavori */}
      <Section
        title={dict.myWorks}
        description={dict.worksCaption}
      >
        <div className={styles.projects}>{PROJECTS.map((p, i) => <ProjectCard
          key={`project-${i}`}
          dict={dict}
          name={p.name}
          slug={p.slug}
          description={dict.projectItems[p.slug].description}
          skills={p.skills}
          link={p.link}
        />)}</div>
      </Section>
    </MainContainer>
    <Footer lang={lang} dict={dict} />
  </>
}