<template>
	home
	<van-button type="primary">接口请求</van-button>
	<customer></customer>
	<hello-world></hello-world>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Toast } from 'vant'
// import customer from '@components/Popup/customer.vue'
export default defineComponent({
	// components: { customer },
	setup() {
		onMounted(() => {
			Toast('hi')
		})
	}
})
</script>

<style>
#app {
	/* margin-top: 60px; */
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	text-align: center;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.dark .dark\:text-green-400 {
	--tw-text-opacity: 1;

	color: rgba(52, 211, 153, var(--tw-text-opacity));
}
</style>
