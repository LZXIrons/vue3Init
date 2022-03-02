<template>
	<div class="home">
		<button @click="goabout">go about</button>
	</div>
</template>

<script lang="ts">
// import { mapMutations } from 'vuex'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	setup() {
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
		return {
			goabout
		}
	}
})
</script>
