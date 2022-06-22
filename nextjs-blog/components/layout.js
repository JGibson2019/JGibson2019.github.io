import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Jacqueline Gibson';
export const siteTitle = 'Jacqueline Gibson';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/j-solid.svg"/>
        <meta
          name="description"
          content="Simple site built using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/pearls_crop.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="Minimalist rendering of Jacqueline; she is a Black woman with shoulder length locs wearing a red dress and white pearls"
            />
            <h1 className={utilStyles.heading2Xl}>Hey, I'm {name}!</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/pearls_crop.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="Minimalist rendering of Jacqueline; she is a Black woman with shoulder length locs wearing a red dress and white pearls"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}