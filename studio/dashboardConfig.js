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
                  buildHookId: '62df7610b0884632193bc337',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6mr2ii74',
                  apiId: '88d1a11a-90cc-4014-8983-79f0bb328eaf'
                },
                {
                  buildHookId: '62df76108d727330d61e4a3d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-quk26ohg',
                  apiId: 'ac89adb9-1088-4ccf-8009-5341e1eaef58'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sumendra-manandhar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-quk26ohg.netlify.app', category: 'apps'}
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
