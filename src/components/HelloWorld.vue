<script setup lang="ts">
import { onMounted } from 'vue'
import { testStore } from '@/store/pinia'
const Store = testStore()
const add = () => {
	Store.addTest()
}

defineProps({ msg: String })

onMounted(() => {
	// axios.get(import.meta.env.VITE_INTERFACE_ORIGIN + 'osinfo/all').then(res => {
	// 	console.log(res.data)
	// })
})
</script>

<template>
	<p class="flex justify-start text-light-50" v-if="msg">title title</p>
	<p class="bigtxt">big txt</p>

	<p>{{ msg }}</p>
	<button type="button" @click="add">count is: {{ Store.test }}</button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/mixin.scss';
p,
button {
	position: relative;
	display: flex;
	margin: 0;
	font-size: $font-size-txtm;
	color: #f00;
}
p {
	@include text-overflow(3);
	&.bigtxt {
		display: block;
		font-size: $font-size-btxtl;
		color: red;
	}
	&.title {
		font-size: $font-size-titles;

		@include userselect($page-user-select);
	}
}
button {
	@include box-shadow;

	font-size: 12rpx;
	color: #f00;
	border: 0;
}
</style>
