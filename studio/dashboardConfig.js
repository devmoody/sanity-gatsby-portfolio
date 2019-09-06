export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d72684b65add5bb5957079b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qtn6c3nt',
                  apiId: '1d3fa2c7-64ab-43cd-95e0-b055c2a6c3a9'
                },
                {
                  buildHookId: '5d72684be3c98498689ff612',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uz9hb48p',
                  apiId: 'a5c42e09-f5a2-45c1-a97d-05a3aea9d887'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devmoody/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uz9hb48p.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
