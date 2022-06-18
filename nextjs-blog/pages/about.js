import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';


export default function AboutMe() {
    return (
    <Layout>
        <Head>
            <title>About Jacqueline</title>
        </Head>
            <h1>Some basic information about me</h1>
            <p>I'm a Digital Equity Advocate &amp; Software Engineer building change from the code up. I'm interested in leveraging technology for social good, particularly identifying ways in which current technology maintains social inequities and working to eliminate these biases. Ultimately, I strive to understand what is necessary to create systems that everyone, regardless of ability, can use with ease.</p>
            
            <p>My day job is developing tools to create accessible applications for Android, Windows, and web as part of Microsoft's <a href="https://accessibilityinsights.io">Accessibility Insights team</a>. Additionally, I'm a Master's Student at Columbia University, where I'm advised by Professor Brian A. Smith in the Computer-Enabled Abilities Laboratory <a href="https://ceal.cs.columbia.edu/">(CEAL)</a></p>

            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
    </Layout>);
  }