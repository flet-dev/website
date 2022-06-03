module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        description: 'Flet apps can be created in multiple languages. Follow a getting-started guide below for your language.',
        slug: "/getting-started"
      },
      collapsed: false,
      items: [
        'getting-started/python',
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
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'generated-index',
        description: 'Flet apps can be created in multiple languages. Follow a getting-started guide below for your language.',
        slug: "/tutorials"
      },
      collapsed: false,
      items: [
        'tutorials/python-todo',
      ],
    },
    'roadmap',
  ]
};
