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
import formatText from '@/utils/textUtils';

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
      
      {/* Tecnologie */}
      <Section
        title={dict.techStack.title}
        description={dict.techStack.description}
      ></Section>
      
      {/* Percorso */}
      <Section
        title={dict.myJourney}
        description={''}
      ></Section>
    </MainContainer>
    <Footer lang={lang} dict={dict} />
  </>
}