module.exports = {
  title: 'Jacqueline',
  tagline: 'Software Engineer, Digital Equity Advocate, Pop Culture Encyclopedia',
  url: 'https://jgibson2019.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'JGibson2019', // Usually your GitHub org/user name.
  projectName: 'JGibson2019.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jacqueline Gibson',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Content',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jgibson2019',
          label: 'GitHub Profile',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'LinkedIn',
              href: 'https:///www.linkedin.com/in/gibsonjacqueline/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/this_is_jcg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JGibson2019',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
