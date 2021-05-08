const router = [
  {
    path: '/',
    component: 'home',
    exact: true,
    title: 'Home'
  },
  {
    path: '/hoc-form',
    component: 'HOCForm',
    exact: true,
    title: 'HOC Form'
  },
  {
    path: '/dialog',
    component: 'dialog',
    exact: true,
    title: 'Dialog'
  },
  {
    path: '/render-with-logger',
    component: 'renderWithLogger',
    exact: true,
    title: 'Render With Logger'
  },
  {
    path: '/custom-react',
    component: 'customReact',
    exact: true,
    title: 'custom react'
  },
  {
    component: 'error',
    title: 'error'
  }
]

export default router
