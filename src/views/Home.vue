<template>
	<div
		class="text-red-400 dark:text-green-400 bg-white flex justify-center items-center"
	>
		<button @click="goabout">{{ title }}</button>
		<van-button type="primary" @click="handleShow">接口请求</van-button>
		<van-button type="primary" @click="toggleTheme">样式切换</van-button>
	</div>
</template>

<script lang="ts" setup>
import { findGoodsDetail } from '@/api/test'
import { testStore } from '@/store/pinia'
const router = useRouter()
const title = '哈哈哈1'
// const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
const appStore = testStore()
const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
const isDark = useDark({
	// selector: 'body',
	// attribute: 'arco-theme',
	// valueDark: 'dark',
	// valueLight: 'light',
	// storageKey: 'arco-theme',
	// onChanged(dark: boolean) {
	// 	console.log('样式切换')
	// 	appStore.toggleTheme(dark)
	// }
})
const toggleTheme = useToggle(isDark)
const theme = computed(() => {
	return appStore.theme
})
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
<style lang="scss">
.home {
	// @apply font-bold py-2 px-4 rounded text-[30px];
}
</style>
