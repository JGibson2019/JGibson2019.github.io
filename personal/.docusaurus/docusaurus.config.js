export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Jacqueline Gibson",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "about",
          "label": "About Me",
          "position": "left"
        },
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Articles and Talks",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/jgibson2019",
          "label": "GitHub Profile",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Content",
          "items": [
            {
              "label": "Articles",
              "to": "docs/articles/"
            },
            {
              "label": "Talks",
              "to": "docs/talks/"
            }
          ]
        },
        {
          "title": "Social Media",
          "items": [
            {
              "label": "LinkedIn",
              "href": "https:///www.linkedin.com/in/gibsonjacqueline/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/this_is_jcg"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/JGibson2019"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Built with Docusaurus."
    }
  },
  "title": "Jacqueline",
  "tagline": "Software Engineer, Digital Equity Advocate, Pop Culture Encyclopedia",
  "url": "https://jgibson2019.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "JGibson2019",
  "projectName": "JGibson2019.github.io",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "articles",
          "sidebarPath": "C:\\Users\\jagibson\\repos\\jgibson2019.github.io\\personal\\sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\jagibson\\repos\\jgibson2019.github.io\\personal\\src\\css\\custom.css"
        }
      }
    ]
  ]
};