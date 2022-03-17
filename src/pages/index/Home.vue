<template>
	<div
		class="text-red-400 dark:text-green-400 flex justify-center items-center"
	>
		<!-- <button @click="goabout">{{ title }}</button>
		<button @click="handleShow">接口请求</button> -->
		<!-- <van-button type="primary" @click="toggleTheme">样式切换</van-button> -->
	</div>
</template>

<script lang="ts" setup>
import { findGoodsDetail, wbApi } from '@/api/test'

import { testStore } from '@/store/pinia'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import {
	defineComponent,
	computed,
	watch,
	watchEffect,
	onMounted,
	ref,
	reactive
} from 'vue'

const router = useRouter()
const title = '哈哈哈'
// const isDark = useDark()
// const toggleTheme = useToggle(isDark)
const appStore = testStore()
const theme = computed(() => {
	return appStore.theme
})
console.log(theme.value)
watch(theme, (n, o) => {
	console.log(n, o)
})
watchEffect(() => {
	console.log(theme.value)
})
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
		const res = await findGoodsDetail({ id: 10367 })
		// const res = await wbApi({
		// 	latitude: '23.008041',
		// 	longitude: '113.340155',
		// 	shopCode: 815
		// })
		console.log(res)
	} catch (error) {
		console.log('接口请求错误')
	}
}

onMounted(() => {
	const count = ref(1)
	const obj = reactive({ count })
	const obj1 = reactive({ a: 1 })
	const obj2 = ref(obj1)

	console.log(count.value, obj, 'obj2=', obj2.value)
	init()
})
</script>
<style lang="scss">
.home {
	// @apply font-bold py-2 px-4 rounded text-[30px];
}
</style>
