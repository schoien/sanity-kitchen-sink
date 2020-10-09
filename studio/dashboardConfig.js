export default {
  widgets: [
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
                  buildHookId: '5f8044d8e7112275edfd6911',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9twr3k3i',
                  apiId: 'a16a7130-5f82-4482-9d0c-dda26a9c313d'
                },
                {
                  buildHookId: '5f8044d8148e7c7e1a0849d7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xnuxxx8g',
                  apiId: 'c344ab00-8428-4b32-9758-095fe0469e93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/schoien/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xnuxxx8g.netlify.app', category: 'apps'}
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
