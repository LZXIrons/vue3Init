<template>
	<div class="login-box">
		<el-form
			:model="form"
			ref="form"
			label-width="80px"
			:inline="false"
			size="normal"
		>
			<el-form-item label="">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
	name: ''
})
const onSubmit = () => {
	console.log('object')
}
</script>
<style lang="scss" scoped>
.login-box {
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	justify-content: space-between;
	max-width: 80%;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 10px;
	box-shadow: 0 0 5px #999;
	transform: translateX(-50%) translateY(-50%);
}
</style>
<route>
{
    meta: {
        title: "登录",
        constant: true,
        layout: false
    }
}
</route>
