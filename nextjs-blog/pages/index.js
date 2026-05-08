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
        <p>I'm a Senior Software Engineer at Microsoft who builds systems enabling other engineers to ship software faster, safer, and with confidence. 
                I bring both depth in designing and delivering production systems and breadth across domains ranging from accessibility platforms to AI-powered automation and developer tooling. 
                Teams trust me with stepping into new problem spaces, quickly building context, and translating ideas into shipped features, often from early exploration through production. 
                I care deeply about innovation, continuous learning, and raising the technical bar - not just within my team, but across organizations by developing standards, shared platforms, and driving cross-team impact. 
                Simply put, I am the kind of engineer you bring in when you need clarity, momentum, and delivered results.</p>

        <p>Interested in the code I write? Check out my public GitHub profile <a href="https://github.com/JGibson2019">here</a>.</p>

        <p className={utilStyles.profileNote}>Note: the bulk of my Open Source contributions stop after 2024; the majority of my recent commits are internal only.</p>


        <p className="description">
          For more information about my work and technical strengths, check out my{' '}
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
          <p>January 2025 - <a href="https://www.ursulinedallas.org/home-page-news/~board/alumnae-awardees/post/young-alumna-2025">I was named the Ursuline Academy of Dallas Young Alumnae of the year</a> and inducted into the Hall of Honor.</p>
          <p>September 2024 - I was invited to join the Ursuline Academy of Dallas Development Board</p>
          <p>May 2024 - Graduated with my M.S. in Computer Science from Columbia University. Roar, Lion, Roar!</p>
          <p>March 2024 - <a href="https://arxiv.org/pdf/2403.08221">We were published at CHI!</a> I worked on this project my last summmer in grad school and I'm so excited to see it out in the world!</p>
      </section>
    </Layout>
  );
}
