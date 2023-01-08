import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import tdkMethod from './tdk'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// 固定路由
const constantRoutes: Array<RouteRecordRaw> = setupLayouts(generatedRoutes)
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
