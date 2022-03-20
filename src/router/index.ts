import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import tdkMethod from './tdk'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// 固定路由
let constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue'),
		meta: {
			title: '登录'
		}
	}
]
constantRoutes = generatedRoutes.filter(item => {
	return item.meta?.enabled !== false && item.meta?.constant === true
})
const router = createRouter({
	history: createWebHistory(),
	routes: constantRoutes
})
// tdk
router.beforeEach((to, from, next) => {
	console.log('router.beforeEach---------', to)
	tdkMethod(to, from, next)
})
export default router
