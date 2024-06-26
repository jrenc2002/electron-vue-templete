import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login-view'
  },
  {
    path: '/home-view',
    name: 'HomeView',
    meta: {
      title: '首页'
    },
    // @ts-ignore:编译器弱智
    component: () => import(/* webpackChunkName: "login" */ '@/view/HomeView.vue'),
    children: []
  },
  {
    path: '/login-view',
    name: 'LoginView',
    meta: {
      title: '首页'
    },
    // @ts-ignore:编译器弱智
    component: () => import(/* webpackChunkName: "login" */ '@/view/LoginView.vue'),
    children: []
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | 生物设备`;
//     next('/loginview');
//     // const token = localStorage.getItem('token');
//     // if (!token && !['/login'].includes(to.path)) {
//     //     console.log(to.path);
//     //     next('/login');
//     // } else {
//     //     next()
//     // }
//
// });

export default router
