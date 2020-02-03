export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e37c7032dc111c201ba460a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q6u4f8fa',
                  apiId: '1780173d-a7fa-4504-bd8d-3a38ce467b02'
                },
                {
                  buildHookId: '5e37c703c43c808188ae72f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-451vpu9z',
                  apiId: '2d9cbda8-d095-4232-9670-5261cd1b91b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Extraesa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-451vpu9z.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
