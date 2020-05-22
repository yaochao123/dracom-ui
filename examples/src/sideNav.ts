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
      }
    ]
  },
  {
    name: '反馈组件',
    id: 2,
    children: [
      {
        name: 'Loading',
        path: '/loading',
        navName: 'Loading 加载',
        component: (resolve: any) => {
          require(['@/docs/loading.md'], resolve)
        }
      }
    ]
  }
]
