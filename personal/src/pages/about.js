import React from 'react';
import Layout from '@theme/Layout';

function About() {
  return (
    <Layout title="About Jacqueline">
      <h1
        style={{paddingTop: '3%',
        paddingLeft: '25%',
        justifyContent: 'center',
        alignItems:'center', }}>
          About
        </h1>
      <div
        style={{
          paddingLeft: '25%',
          paddingRight: '25%',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
        <p>Jacqueline is a Digital Equity Advocate &amp; Software Engineer building change from the code up. She's interested in leveraging technology for social good, particularly identifying ways in which current technology maintains social inequities and working to eliminate these biases. She strives to understand what is necessary to create systems that everyone, regardless of ability, can use with ease.</p>
        <p>She graduated with dual degrees in Computer Science and African &amp; African Diaspora Studies from the University of Texas at Austin; she also completed a minor in Human Computer Interaction. She's currently developing tools to create accessible applications for Android, Windows, and web as part of Microsoft's Accessibility Insights team.</p>
        <p>Jacqueline is an active member of Delta Sigma Theta Sorority, Inc. She also volunteers with several non-profits, including SAG3, National Center for Women in Information Technology, and Black Girls Code.</p>
      </div>
    </Layout>
  );
}

export default About;