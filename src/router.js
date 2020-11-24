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
    title: 'dialog'
  },
  {
    component: 'error',
    title: 'error'
  }
]

export default router
