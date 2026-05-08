import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function AboutMe() {
    return (
    <Layout>
        <Head>
            <title>About Jacqueline</title>
        </Head>
            <h1 className={utilStyles.emphasizeText}>Some basic information about me</h1>
            <p>I'm a senior software engineer, recovering CS grad student, and a digital equity advocate building change from the code up. At my 9-5, I focus on building the testing tools that Microsoft internal teams rely on to ship products that everyone can use. 
            My current technical interests sit at the intersection of developer tooling, standards, AI, and social computing. If you're looking for an engineer who can deliver clarity, results, and innovation, you're in the right place!</p>
    
            <p>For undergrad, I attended The University of Texas at Austin, where I was advised by Professor Simone Browne and mentored by Professor Alison Norman. I graduated with dual degrees in Computer Science and African &amp; African Diaspora Studies; I also completed a minor in Human Computer Interaction.</p>
            
            <p>For grad school, I attended Columbia University, where I worked with Professor Brian A. Smith in the Computer-Enabled Abilities Laboratory <a href="https://ceal.cs.columbia.edu/">(CEAL)</a>.</p>
            
            <p>Outside of my 9-5, you can catch me teaching crochet classes at the local library, chasing after my dog Watson, reading a book (or 2), traveling somewhere new, or exploring all the good eats near my hometown.</p>

            <p>Want to see my talks and podcast apperances? Check out the <Link href="/talks"><a>talks page</a></Link> for more information.</p>
    </Layout>);
  }