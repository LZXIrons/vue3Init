<template>
	<Header></Header>
	<router-view v-slot="{ Component, route }">
		<transition name="main" mode="out-in" appear>
			<!-- BUG https://github.com/vuejs/vue-next/issues/4984 -->
			<component :is="Component" :key="route.fullPath" />
		</transition>
	</router-view>
	<Footter></Footter>
</template>
<script lang="ts" setup>
import Header from './components/Header.vue'
import Footter from './components/footer.vue'
</script>
