import Header from '@/app/components/Header/Header';
import { getDictionary } from '../dictionaries';
import styles from './page.module.css'
import MainContainer from '@/app/components/Containers/MainContainer';
import Footer from '@/app/components/Footer/Footer';

export default async function Page({ params }) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return <>
        <Header lang={lang} dict={dict} activeLink="blog" />
        <MainContainer></MainContainer>
        <Footer lang={lang} dict={dict} />
    </>
}