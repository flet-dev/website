module.exports = {
  docs: [
    "introduction",
    "install",
    {
      type: "category",
      label: "Creating Flet app",
      // link: {
      //   type: "doc",
      //   id: "create/create-flet-app",
      // },
      items: [
        "create/create-flet-app",
        'create/running-app',
        'create/flet-app-structure',
        'create/flet-controls',
        'create/adaptive-apps',
        'create/navigation-and-routing',
        'create/user-controls',
        "create/testing-on-ios",
        "create/testing-on-android",
        'create/async-apps',
      ],
    },
    {
      type: "category",
      label: "Publishing Flet app",
      link: {
        type: "doc",
        id: "publish/index",
      },
      items: [
        "publish/android",
        "publish/ios",
        "publish/macos",
        "publish/linux",
        "publish/windows",
        {
          type: "category",
          label: "Web",
          link: {
            type: "doc",
            id: "publish/web/index",
          },
          items: [
            {
              type: "category",
              label: "Static website",
              link: {
                type: "doc",
                id: "publish/web/static-website/index",
              },
              items: [
                {
                  type: "category",
                  label: "Hosting",
                  link: {
                    type: "generated-index",
                    slug: "publish/web/static-website/hosting",
                  },
                  items: [
                    "publish/web/static-website/hosting/cloudflare",
                  ],
                }
              ],
            },
            {
              type: "category",
              label: "Dynamic website",
              link: {
                type: "doc",
                id: "publish/web/dynamic-website/index",
              },
              items: [
                {
                  type: "category",
                  label: "Hosting",
                  link: {
                    type: "generated-index",
                    slug: "publish/web/dynamic-website/hosting",
                  },
                  items: [
                    "publish/web/dynamic-website/hosting/fly-io",
                    "publish/web/dynamic-website/hosting/replit",
                    "publish/web/dynamic-website/hosting/self-hosting",
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Extending Flet",
      // link: {
      //   type: "doc",
      //   id: "create/create-flet-app",
      // },
      items: [
        "extend/creating-controls-in-python",
        "extend/integrating-existing-flutter-packages"
      ],
    },
    {
      type: "category",
      label: "Controls",
      link: {
        type: "doc",
        id: "controls/overview",
      },
      items: [
        {
          type: "category",
          label: "Layout",
          link: {
            type: "generated-index",
            slug: "controls/layout",
          },
          items: [
            "controls/card",
            "controls/column",
            "controls/container",
            "controls/cupertinolisttile",
            "controls/datatable",
            "controls/dismissible",
            "controls/divider",
            "controls/expansionpanel",
            "controls/expansiontile",
            "controls/gridview",
            "controls/listtile",
            "controls/listview",
            "controls/page",
            "controls/pagelet",
            "controls/responsiverow",
            "controls/row",
            "controls/safearea",
            "controls/stack",
            "controls/tabs",
            "controls/verticaldivider",
            "controls/view",
          ],
        },
        {
          type: "category",
          label: "Navigation",
          link: {
            type: "generated-index",
            slug: "controls/app-structure-navigation",
          },
          items: [
            "controls/appbar",
            "controls/bottomappbar",
            "controls/cupertinoappbar",
            "controls/cupertinonavigationbar",
            "controls/menubar",
            "controls/navigationbar",
            "controls/navigationdrawer",
            "controls/navigationrail",
          ],
        },
        {
          type: "category",
          label: "Information Displays",
          link: {
            type: "generated-index",
            slug: "controls/information-displays",
          },
          items: [
            "controls/badge",
            "controls/canvas",
            "controls/circleavatar",
            "controls/icon",
            "controls/image",
            "controls/markdown",
            "controls/text",
            "controls/progressbar",
            "controls/progressring",
            "controls/webview",
          ],
        },
        {
          type: "category",
          label: "Buttons",
          link: {
            type: "doc",
            id: "controls/buttons",
          },
          items: [
            "controls/cupertinobutton",
            "controls/cupertinodialogaction",
            "controls/elevatedbutton",
            "controls/filledbutton",
            "controls/filledtonalbutton",
            "controls/floatingactionbutton",
            "controls/iconbutton",
            "controls/menuitembutton",
            "controls/outlinedbutton",
            "controls/popupmenubutton",
            "controls/segmentedbutton",
            "controls/submenubutton",
            "controls/textbutton",
          ],
        },
        {
          type: "category",
          label: "Input and Selections",
          link: {
            type: "generated-index",
            slug: "controls/input-and-selections",
          },
          items: [
            "controls/checkbox",
            "controls/chip",
            "controls/cupertinocheckbox",
            "controls/cupertinoradio",
            "controls/cupertinoslider",
            "controls/cupertinoswitch",
            "controls/cupertinotextfield",
            "controls/dropdown",
            "controls/radio",
            "controls/rangeslider",
            "controls/searchbar",
            "controls/slider",
            "controls/switch",
            "controls/textfield",
          ],
        },
        {
          type: "category",
          label: "Dialogs, Alerts and Panels",
          link: {
            type: "generated-index",
            slug: "controls/dialogs-alerts-panels",
          },
          items: [
            "controls/alertdialog",
            "controls/banner",
            "controls/bottomsheet",
            "controls/cupertinoalertdialog",
            "controls/datepicker",
            "controls/snackbar",
            "controls/timepicker"
          ],
        },
        {
          type: "category",
          label: "Charts",
          link: {
            type: "generated-index",
            slug: "controls/charts",
          },
          items: [
            "controls/barchart",
            "controls/linechart",
            "controls/matplotlibchart",
            "controls/piechart",
            "controls/plotlychart"
          ],
        },
        {
          type: "category",
          label: "Animations",
          link: {
            type: "generated-index",
            slug: "controls/animations",
          },
          items: ["controls/animatedswitcher"],
        },
        {
          type: "category",
          label: "Utility",
          link: {
            type: "generated-index",
            slug: "controls/utility",
          },
          items: [
            "controls/audio",
            "controls/audiorecorder",
            "controls/draggable",
            "controls/dragtarget",
            "controls/filepicker",
            "controls/fletapp",
            "controls/gesturedetector",
            "controls/hapticfeedback",
            "controls/selectionarea",
            "controls/semantics",
            "controls/shadermask",
            "controls/shakedetector",
            "controls/tooltip",
            "controls/transparentpointer",
            "controls/video",
            "controls/windowdragarea",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cookbook",
      items: [
        "cookbook/keyboard-shortcuts",
        "cookbook/large-lists",
        "cookbook/drag-and-drop",
        "cookbook/file-picker-and-uploads",
        "cookbook/animations",
        "cookbook/authentication",
        "cookbook/client-storage",
        "cookbook/session-storage",
        "cookbook/encrypting-sensitive-data",
        "cookbook/pub-sub",
        "cookbook/control-refs",
        "cookbook/accessibility",
        "cookbook/logging",
        "cookbook/packaging-app-for-distribution",
        "cookbook/packaging-desktop-app",
        "cookbook/publishing-static-website",
        "publish/deploying-web-app/running-flet-with-fastapi",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
        description:
          "Some of the awesome Flet tutorials to get your started:",
        slug: "/tutorials",
      },
      items: [
        "tutorials/python-todo",
        "tutorials/python-calculator",
        "tutorials/trello-clone",
        "tutorials/python-solitaire",
        "tutorials/python-realtime-chat",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "reference/colors",
        {
          type: "category",
          label: "CLI",
          link: {
            type: "doc",
            id: "reference/cli/index",
          },
          items: [
            "reference/cli/create",
            "reference/cli/run",
            "reference/cli/pack",
            "reference/cli/publish",
          ],
        }
      ],
    }
  ],
};
