import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
  // 使用哈希的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
