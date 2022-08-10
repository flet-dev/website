module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Python Guide',
      items: [
        'guides/python/getting-started',
        'guides/python/displaying-data',
        'guides/python/getting-user-input',
        'guides/python/large-lists',
        'guides/python/drag-and-drop',
        'guides/python/navigation-and-routing',
        'guides/python/pub-sub',
        'guides/python/user-controls',
        // 'guides/python/hot-reload',
        'guides/python/packaging-desktop-app',
        {
          type: 'category',
          label: 'Deploying web app',
          link: {
            type: 'doc',
            id: 'guides/python/deploying-web-app/overview'
          },
          items: [
            'guides/python/deploying-web-app/fly-io',
            'guides/python/deploying-web-app/replit'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'generated-index',
        description: 'Flet apps can be created in multiple languages. Follow a getting-started guide below for your language.',
        slug: "/tutorials"
      },
      items: [
        'tutorials/python-todo',
        'tutorials/python-calculator',
      ],
    },
    {
      type: 'category',
      label: 'Controls',
      link: {
        type: 'doc',
        id: 'controls/overview'
      },
      items: [
        {
          type: 'category',
          label: 'Layout',
          link: {
            type: 'generated-index',
            slug: 'controls/layout'
          },
          items: [
            'controls/page',
            'controls/view',
            'controls/container',
            'controls/row',
            'controls/column',
            'controls/stack',
            'controls/listview',
            'controls/listtile',
            'controls/gridview',
            'controls/tabs',
            'controls/card',
            'controls/divider',
            'controls/verticaldivider',
          ]
        },
        {
          type: 'category',
          label: 'Navigation',
          link: {
            type: 'generated-index',
            slug: 'controls/app-structure-navigation'
          },
          items: [
            'controls/appbar',
            'controls/navigationrail',
            //'controls/navigationbar',
          ]
        },
        {
          type: 'category',
          label: 'Information Displays',
          link: {
            type: 'generated-index',
            slug: 'controls/information-displays'
          },
          items: [
            'controls/text',
            'controls/icon',
            'controls/image',
            'controls/markdown',
            'controls/circleavatar',
            'controls/progressbar',
            'controls/progressring',
          ]
        },
        {
          type: 'category',
          label: 'Buttons',
          link: {
            type: 'doc',
            id: 'controls/buttons'
          },
          items: [
            'controls/elevatedbutton',
            'controls/filledbutton',
            'controls/filledtonalbutton',
            'controls/outlinedbutton',
            'controls/textbutton',
            'controls/iconbutton',
            'controls/floatingactionbutton',
            'controls/popupmenubutton',
          ]
        },
        {
          type: 'category',
          label: 'Input and Selections',
          link: {
            type: 'generated-index',
            slug: 'controls/input-and-selections'
          },
          items: [
            'controls/checkbox',
            'controls/dropdown',
            'controls/radio',
            'controls/slider',
            'controls/switch',
            'controls/textfield',
          ]
        },
        {
          type: 'category',
          label: 'Dialogs, Alerts and Panels',
          link: {
            type: 'generated-index',
            slug: 'controls/dialogs-alerts-panels'
          },
          items: [
            'controls/banner',
            'controls/snackbar',
            'controls/alertdialog',
          ]
        },
        {
          type: 'category',
          label: 'Utility',
          link: {
            type: 'generated-index',
            slug: 'controls/utility'
          },
          items: [
            'controls/shadermask',
            'controls/draggable',
            'controls/dragtarget',
          ]
        },
      ]
    },
    'roadmap',
  ]
};
