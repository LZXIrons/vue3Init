<!-- eslint-disable @typescript-eslint/no-empty-function -->
<template>
	<div class="head-box">
		<div class="flex justify-between items-center">
			<div class="flex justify-center">
				<IconPark
					:icon="Left"
					theme="outline"
					:size="iconSize"
					:stroke-width="2"
					class="icon-button"
					@click="router.back()"
				/>
				<IconPark
					:icon="Right"
					theme="outline"
					:size="iconSize"
					:stroke-width="2"
					class="icon-button"
					@click="router.forward()"
				/>
			</div>
			<div class="search">
				<SearchPopup />
			</div>
		</div>
		<div class="flex items-center mr-5">
			<IconPark
				:icon="Mail"
				:stroke-width="2"
				:size="iconXsSize"
				class="icon-button"
			/>
			<IconPark
				:icon="Platte"
				:size="iconXsSize"
				:stroke-width="2"
				class="icon-button"
				@click="changeThemeMode"
			/>
			<IconPark
				:size="iconXsSize"
				:icon="HamburgerButton"
				:stroke-width="2"
				class="icon-button"
			/>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { HamburgerButton, Mail, Platte, Left, Right } from '@icon-park/vue-next'
import { useAppSetting } from '@/hooks/useAppSetting'

const { iconXsSize, iconSize } = useAppSetting()
const router = useRouter()
const changeThemeMode = () => {
	console.log('change')
}
</script>
<style lang="scss" scoped>
.search {
	@apply text-xs ml-2.5;
	:deep(.el-input__wrapper) {
		@apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
	}
}
.head-box {
	@apply flex justify-between items-center h-16 pl-12;
}
.icon-button {
	@apply p-2 cursor-pointer;
	@apply hover:text-emerald-400;
}
</style>
