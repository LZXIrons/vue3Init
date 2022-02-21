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
		const goabout = () => {
			router.push({
				path: '/about',
				query: {
					title: 1
				}
			})
		}
		return {
			goabout
		}
	}
})
</script>
