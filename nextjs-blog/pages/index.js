import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm <strong>Jacqueline</strong>! I'm a software engineer, CS grad student, and a digital equity advocate building change from the code up.</p>
        
        <p className="description">
          You can click here to learn more{' '}
            <Link href="/about">
              <a>about me!</a>
            </Link>{' '} 
              I also have links to{' '}
              <Link href="/articles">
                <a>some of the articles I've been featured in/written</a>
              </Link> {' '}as well as{' '} 
              <Link href="/talks">
                <a>some of the most interesting talks I've delivered</a>
              </Link>
        </p>
      </section>
    </Layout>
  );
}
