export const navData = [
  {
    name: '开发指南',
    id: 0,
    children: [
      {
        name: 'Introduce',
        path: '/introduce',
        navName: '介绍',
        component: (resolve: any) => {
          require(['@/docs/introduce.md'], resolve)
        }
      },
      {
        name: 'Theme',
        path: '/theme',
        navName: '主题样式',
        component: (resolve: any) => {
          require(['@/docs/theme.md'], resolve)
        }
      }
    ]
  },
  {
    name: '基础组件',
    id: 1,
    children: [
      {
        name: 'Button',
        path: '/button',
        navName: 'Button 按钮',
        component: (resolve: any) => {
          require(['@/docs/button.md'], resolve)
        }
      },
      {
        name: 'Icon',
        path: '/icon',
        navName: 'Icon 图标',
        component: (resolve: any) => {
          require(['@/docs/icon.md'], resolve)
        }
      }
    ]
  },
  {
    name: '表单组件',
    id: 2,
    children: [
      {
        name: 'Search',
        path: '/search',
        navName: 'Search 搜索框',
        component: (resolve: any) => {
          require(['@/docs/search.md'], resolve)
        }
      }
    ]
  },
  {
    name: '反馈组件',
    id: 3,
    children: [
      {
        name: 'Loading',
        path: '/loading',
        navName: 'Loading 加载',
        component: (resolve: any) => {
          require(['@/docs/loading.md'], resolve)
        }
      },
      {
        name: 'Dialog',
        path: '/dialog',
        navName: 'Dialog 弹出框',
        component: (resolve: any) => {
          require(['@/docs/dialog.md'], resolve)
        }
      },
      {
        name: 'Overlay',
        path: '/overlay',
        navName: 'Overlay 遮罩层',
        component: (resolve: any) => {
          require(['@/docs/overlay.md'], resolve)
        }
      }
    ]
  }
]
