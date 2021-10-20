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
                  buildHookId: '617036d8181cb02eb139be5f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ycrmkkx1',
                  apiId: 'bbff8ce5-1aa1-45f8-8420-463f3b4e2ba3'
                },
                {
                  buildHookId: '617036d8f1a814195cfb8f6d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uyou994o',
                  apiId: 'ac0c6f13-d364-4ad8-bf92-2014492b481c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Fundnet/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uyou994o.netlify.app', category: 'apps'}
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
