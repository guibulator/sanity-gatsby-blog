export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd61e3d2a4b8ddde19d976a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u3vyxtrd',
                  apiId: '8eafc36a-1bad-4ae0-9e8b-225604796d20'
                },
                {
                  buildHookId: '5fd61e3dae5523d74a51c48c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a1wzbbzq',
                  apiId: 'c579f4a4-0bf4-4f8c-9782-a1d69095e983'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guibulator/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a1wzbbzq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
