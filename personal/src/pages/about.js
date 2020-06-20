import Layout from '@theme/Layout';
import React from 'react';

function About() {
  return (
    <Layout title="About">
      <div
        style={{
            padding: '30px',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
        }}>
        <h1>Meet Jacqueline</h1>
        <p>Jacqueline is a Digital Equity Advocate and Software Engineer building change from the code up. She's interested in leveraging technology for social good, particularly identifying ways in which current technology maintains social inequities and working to eliminate these biases. She strives to understand what is necessary to create systems that everyone, regardless of ability, can use with ease.</p>
        <p>She graduated with dual degrees in Computer Science and African &amp; African Diaspora Studies as well as a minor in Human Computer Interaction from the University of Texas at Austin. She's currently developing tools to create accessible applications for Android, Windows, and web as part of Microsoft's Accessibility Insights team.</p>
        <p>Jacqueline is a member of Delta Sigma Theta Sorority, Inc., and she remains involved with several non-profits, including SAG3, National Center for Women &amp; Information Technology, and Black Girls Code</p>
      </div>
    </Layout>
  );
}

export default About;