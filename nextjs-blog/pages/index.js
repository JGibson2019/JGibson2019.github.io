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

        <h2>Latest Updates</h2>
          <p>June 2022 - Started my summer research position with the <a href="https://ceal.cs.columbia.edu/">CEAL Lab</a></p>
          <p>May 2022 - <a href="https://knowbility.org/programs/accessu-2022/accessibility-insights-web-and-android-development-with-accessibility-in-mind">I led a live workshop at the 2022 John Slatin AccessU Conference</a> where we taught participants how to find and fix common web and Android accessibility issues</p>
          <p>February 2022 - Published a <a href="https://devblogs.microsoft.com/engineering-at-microsoft/accessibility-insights-for-web/">dev article about Accessibility Insights for Web</a> for the Engineering@Microsoft blog</p>
          <p>December 2021 - Presented at the 2021 Tech A11y Summit</p>      
      </section>
    </Layout>
  );
}
