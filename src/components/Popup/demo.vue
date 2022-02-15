<template>
	<div :class="{ show: isShow }">
		<div class="overlay" @click="$emit('update:isShow', false)"></div>
		<div class="popup brand-list">
			111111
			<wb-brand-list
				:data="data"
				:cover="cover"
				:active="active"
				@click.stop="$emit('click', $event)"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	// model: {
	//   prop: 'modelValue',
	//   event: 'update:modelValue'
	// },
	props: {
		isShow: {
			type: Boolean,
			default: false
		},
		data: {
			type: Array,
			default: () => []
		},
		active: {
			type: [Object, String],
			default: () => ({})
		},
		cover: {
			type: Boolean,
			default: false
		}
	},
	setup(props, context) {
		const handleShow = () => {
			console.log('关闭')
			context.emit('update:isShow', false)
		}
		return {
			handleShow
		}
	}
})
</script>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	width: 0;
	height: 0;
	background: rgba(0, 0, 0, 0.2);
	opacity: 0;
	transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
}
.popup {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3000;
	z-index: 40000;
	width: 100%;
	height: 100vh;
	background: #fff;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
	transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
	transform: translate(100%);
}
.show {
	transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
	.overlay {
		z-index: 20000;
		width: 100%;
		height: 100%;
		opacity: 1;
	}
	.popup {
		transform: translate(20%);
	}
}
</style>
