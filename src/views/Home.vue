<template>
	<div class="home">
		<button @click="goabout">{{ title }}</button>
		<van-button type="primary" @click="handleShow">主要按钮</van-button>
	</div>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'
// export default defineComponent({
// 	setup() {
// 		const router = useRouter()
// 		const title = '哈哈哈'
// 		const goabout = () => {
// 			router.push({
// 				path: '/about',
// 				query: {
// 					title
// 				}
// 			})
// 		}
// 		return {
// 			goabout
// 		}
// 	}
// })
import { findGoodsDetail } from '@/api/test'
import {
	ref,
	reactive,
	computed,
	watchEffect,
	watch,
	onMounted,
	onUpdated,
	provide
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const title = '哈哈哈'
const goabout = () => {
	router.push({
		path: '/about',
		query: {
			title
		}
	})
}
const handleShow = async () => {
	init()
}
const init = async () => {
	try {
		const res = await findGoodsDetail({
			id: 10367
		})
		console.log(res)
	} catch (error) {
		console.log('接口请求错误')
	}
}
onMounted(() => {
	init()
})
</script>
