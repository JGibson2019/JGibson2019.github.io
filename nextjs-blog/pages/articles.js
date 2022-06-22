import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Articles() {
    return (
    <Layout>
        <Head>
            <title>Articles | Jacqueline</title>
        </Head>
            <h1 className={utilStyles.emphasizeText}>Articles</h1>
                <h2>Articles/Blog posts I've written</h2>
                    <h3><a href="https://devblogs.microsoft.com/engineering-at-microsoft/accessibility-insights-for-web/">Accessibility Insights for Web</a></h3>
                        <p>This article written for the Engineering@Microsoft blog introduces users to the Accessibility Insights for Web extension</p>
                    <h3><a href="https://peopleofcolorintech.com/articles/know-your-worth-a-black-girls-guide-to-negotiating-your-first-salary/">Know Your Worth: A Black Girl's Guide to Negotiating Your First Salary</a></h3>
                        <p>I also wrote an earlier version of this article on Medium. You can find that <a href="https://medium.com/@jacqueline.gibson_11177/know-your-worth-a-guide-to-negotiating-your-first-salary-c14474aa59f6">here</a>. Additionally, I've been invited to deliver talks inspired by this article to student groups; slides can be provided upon request.</p>
            <h2>Articles I've been featured in</h2>
                    <h3><a href="https://issuu.com/collegeofliberalarts/docs/annual_impact_report_18_19/30">Lasting Impact: UT College of Liberal Arts</a></h3>
                        <p>Young Alumni feature in the The University of Texas at Austin College of Liberal Arts Annual Impact Report. Discussed both of my degrees, my work, and how each of us can make the most impact.</p>
                    <h3><a href="https://news.utexas.edu/2019/05/15/jacqueline-gibson-is-building-change-from-the-code-up/?utm_source=facebook&utm_medium=referral&utm_campaign=&fbclid=IwAR3kbkNRZaoSVy0wzWnkVbhZ3yuLnXMnxoYOLbilGiy_L5aEky0kGJyBHUU">Jacqueline Gibson is building change from the code up.</a></h3>
                        <p>Selected as an outstanding Senior for the UT Austin Class of 2019</p>
                    <h3><a href="https://www.peoplenewspapers.com/2019/08/09/ursuline-graduate-takes-love-of-service-to-ut-microsoft/">Ursuline Graduate Takes Love of Service to UT, Microsoft</a></h3>
                        <p>Highlighted in People Newspapers, the publishers of Park Cities People and Preston Hollow People</p>
                    <h3><a href="https://utcampuslifeupdate.tumblr.com/post/184062806533/texas-parents-honors-students-impact">Texas Parents Honors Student’s Impact</a></h3>
                        <p>Selected as one of two Outstanding Student Award winners by Texas Parents</p>
                    <h3><a href="https://studybreaks.com/students/university-texas-jacqueline-gibson/">Jacqueline Gibson Is Advocating For Diversity In Technological Fields</a></h3>
                        <p>Highlighted in Study Breaks magazine</p>
                   
    </Layout>);
  }