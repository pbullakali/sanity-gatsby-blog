export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dde9c88b8fd08c05196e7cd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c5hxeiht',
                  apiId: '9dfa9d14-f125-456c-a8c3-44ece287785d'
                },
                {
                  buildHookId: '5dde9c88ce144c4716008639',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-19t5c24j',
                  apiId: '52fc06f0-d4b6-40bc-833c-979ac8448bdf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbullakali/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-19t5c24j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
