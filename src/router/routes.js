
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: 'cafe', component: () => import('src/pages/Tabla_coffee.vue') },
      { path: 'pasteles', component: () => import('pages/Tabla_cake.vue') },
      { path: 'tienda', component: () => import('pages/Pedir.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
