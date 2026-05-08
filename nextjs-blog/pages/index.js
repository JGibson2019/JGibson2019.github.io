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
        <p>I'm a senior software engineer, recovering CS grad student, and a digital equity advocate building change from the code up.</p>
        
        <p className="description">
          For basic information, check out my{' '}
            <Link href="/about">
              <a>about me</a>
            </Link> section! 
              I also have links to{' '}
              <Link href="/articles">
                <a>some of the articles I've been featured in/written</a>
              </Link> {' '}as well as{' '} 
              <Link href="/talks">
                <a>some of the most interesting talks I've delivered</a>
              </Link>.
        </p>

        <h2 className={utilStyles.emphasizeText}>Latest Updates</h2>
          <p>September 2025 - I was appointed to the Forty Acres Council, the board for the <a href="https://www.texasexes.org/give/giving-societies/forty-acres-society">Forty Acres Society</a></p>
          <p>January 2025 - <a href="https://www.ursulinedallas.org/home-page-news/~board/alumnae-awardees/post/young-alumna-2025">I was named the Ursuline Academy of Dallas Young Alumnae of the year and inducted into the Hall of Honor.</a></p>
          <p>September 2024 - Appointed to the Ursuline Academy of Dallas Development Board</p>
          <p>March 2024 - <a href="https://arxiv.org/pdf/2403.08221">We were published at CHI!</a> I worked on this project my last summmer in grad school and I'm so excited to see it out in the world!</p>
      </section>
    </Layout>
  );
}
