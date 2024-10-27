import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import createRouteGuard from './guard'

import { appRoutes } from './utils'

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
}

/**
 * 创建并配置路由器
 */
const router = createRouter({
  /**
   *    路由模式
   */
  history: routerMode[import.meta.env.VITE_ROUTER_MODE](),

  routes: [
    ...appRoutes,
    {
      path: '/test',
      component: () => import('@/pages/test/index.vue'),
    },
  ],
})

createRouteGuard (router)

export default router
