<template>
	<ElScrollbar>
		<div
			class="mt-11 ml-7 mr-7 text-left"
			v-for="(item1, index1) in menus"
			:key="index1"
		>
			<div class="text-small pr-3 pl-3 mb-2.5">{{ item1.name }}</div>
			<div
				class="menu-item hover-bg-main text-main"
				:class="{ active: currentKey === item2.key }"
				@click="toUrl(item2.key)"
				v-for="(item2, index2) in item1.menus"
				:key="index2"
			>
				<IconPark
					class="align-middle"
					:icon="item2.icon"
					size="18"
					:theme="item2.theme"
				/>
				<span class="ml-2">{{ item2.name }}</span>
			</div>
		</div>
	</ElScrollbar>
</template>
<script lang="ts" setup>
import { useMenu } from '@/layout/components/menu/useMenu'
const { menus, toUrl, currentKey } = useMenu()
</script>
<style lang="scss" scoped>
.menu-item {
	@apply font-bold pt-2.5 pb-2.5 pr-3 pl-3 flex items-center;
}
.active {
	@apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
