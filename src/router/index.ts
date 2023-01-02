import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import tdkMethod from './tdk'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// 固定路由
let constantRoutes: Array<RouteRecordRaw> = []
// let constantRoutes: Array<RouteRecordRaw> = [
// 	{
// 		path: '/',
// 		redirect: '/home',
// 		component: () => import('@/views/Home1.vue'),
// 		meta: {
// 			title: 'home'
// 		}
// 	},
// 	{
// 		path: '/:all(.*)*',
// 		name: 'notFound',
// 		component: () => import('@/views/[...all].vue'),
// 		meta: {
// 			title: '找不到页面'
// 		}
// 	}
// ]
// constantRoutes = setupLayouts(
// 	generatedRoutes.filter(item => {
// 		return item.meta?.enabled !== false && item.meta?.constant === true
// 	})
// )
constantRoutes = setupLayouts(generatedRoutes)
const router = createRouter({
	history: createWebHistory(),
	routes: constantRoutes
})
// tdk
router.beforeEach((to, from, next) => {
	console.log('generatedRoutes', generatedRoutes)
	console.log('constantRoutes', constantRoutes)
	console.log('router.beforeEach---------', to)
	tdkMethod(to, from, next)
})
export default router
