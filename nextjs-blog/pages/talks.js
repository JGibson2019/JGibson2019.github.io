import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Talks() {
    return (
    <Layout>
        <Head>
            <title>Talks | Jacqueline</title>
        </Head>
            <h1 className={utilStyles.emphasizeText}>Talks and Podcasts</h1>
            <p>One of the best ways to advocate for the subjects I'm passionate about is by giving a talk (or two)! While I'm still new to the conference circuit, here are some of the talks I've given grouped by the topics they relate to:</p>
            <h2>Race and Technology</h2>
            <h3>For Us, Without Us: Addressing Tech's Shortcomings in Creating Equity for Black People</h3>
                <p>Presented this at the 2020 Juneteenth Conference. I discussed the ways that anti-Blackness is replicated in technology, the discrepancies faced by Black communities due to the digital divide, and the changes required for us to have a more equitable future. I was invited to give versions of this talk at the <a href="https://www.drupal.org/blog/the-first-ever-virtual-drupalcon">2020 DrupalCon Global</a> and the <a href="https://www.linkedin.com/posts/gibsonjacqueline_many-consider-technology-to-be-the-great-activity-6709213073145692160-O_So?utm_source=linkedin_share&utm_medium=member_desktop_web">2020 PagerDuty Summit</a></p>
                <iframe className={utilStyles.vidFrame} src="https://www.youtube.com/embed/Qzc6D8NZo-4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <h3>Culture Fit: Racial Bias in Tech</h3>
                <p>I was a featured guest on several episodes of this <a href="https://winners.webbyawards.com/2021/podcasts/limited-series-specials/diversity-inclusion/171619/culture-fit-racial-bias-in-tech">Webby-nominated podcast</a> on racial bias and inequity in the Tech industry. Here I have a link to the episode discussing how bias is built into the products companies build</p>
                <iframe className={utilStyles.spotifyFrame} src="https://open.spotify.com/embed/episode/30f2zimyhgxNypGjDrr1po?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            
            <h2>Developing with Accessibility in Mind</h2>
            <h3>Accessibility Insights: Catch accessibility bugs early and often</h3>
                <p>This is a version of a talk I present to technical audiences (developers, program/product managers, and designers) showcasing how teams can leverage our team's free, open-source accessibility testing options to find and fix accessibility issues. This particular recording is from the <a href="https://techa11y.dev/main-track/accessibility-insights-catch-accessibility-bugs-early-and-often/">2021 Tech A11y Summit</a>. Most recently, John and I delivered an extended, live workshop version of this talk at the <a href="https://knowbility.org/programs/accessu-2022/accessibility-insights-web-and-android-development-with-accessibility-in-mind">2022 John Slatin AccessU Conference</a> sponsored by Knowbility.</p>
                <iframe className={utilStyles.vidFrame} src="https://www.youtube.com/embed/93wpslHx4tc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

            <h2>Miscellaneous</h2>
            <p>What is life without a good side quest?</p>
            <h3>Bye Bye, BTS - Unpacking "Bye Bye Birdie"</h3>
                <p>A theatre kid at heart, I'm excited to say I was a guest on the first season of <a href="https://www.broadwaybullshitpod.com/">Broadway Bullshit</a>. I got to geek out about my love for musicals and gush about one of my favorite bands, BTS! Abbey, Cassidy, and I had some great discussion around the intersection between this musical and the global superstars, and even dug in a bit about the evolution of fan culture.</p>
            <iframe className={utilStyles.spotifyFrame}src="https://open.spotify.com/embed/episode/262tceNX5FQF35OFvyhK1u?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <h3>2019 UT Austin College of Natural Sciences Commencement</h3>
                <p>I was the student speaker for the ceremony. I spoke on A) the power of grit, B) the need to embrace imperfection and stay open to growth, and C) the importance of owning your story, flaws and all.</p>
                <iframe className={utilStyles.vidFrame} src="https://www.youtube.com/embed/zhwglPSkQz8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Layout>);
  }