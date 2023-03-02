<template>
	<div class="flex overflow-hidden">
		<div class="bg-main w-60 h-screen flex-shrink-0">
			<Menu />
		</div>
		<div class="flex-1">
			<Header />
			<router-view v-slot="{ Component, route }">
				<transition name="main" mode="out-in" appear>
					<!-- BUG https://github.com/vuejs/vue-next/issues/4984 -->
					<component :is="Component" :key="route.fullPath" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script lang="ts" setup></script>
