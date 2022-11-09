import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout/index.vue';

export const frameIn: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'Home',
        },
      },
    ],
  },
];

const frameOut = [
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('@/views/sys/login/index.vue'),
    meta: {
      title: 'Login',
    },
  },
];

const errorPage = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/sys/error/404.vue'),
  },
];

export default [...frameIn, ...frameOut, ...errorPage];
