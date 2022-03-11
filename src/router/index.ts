import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import tdkMethod from './tdk'

const componentPage = {
	home: () => import('@/views/Home.vue'),
	about: () => import('@/views/About.vue'),
	test: () => import('@/views/test.vue')
}

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: 'Home'
		},
		component: componentPage.home
	},
	{
		path: '/about',
		name: 'About',
		meta: {
			title: 'About'
		},
		component: componentPage.about
	},
	{
		path: '/test',
		name: 'Test',
		meta: {
			title: 'Test'
		},
		component: componentPage.test
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})
// tdk
router.beforeEach((to, from, next) => {
	console.log('router.beforeEach---------', componentPage.home)
	tdkMethod(to, from, next)
})
export default router
