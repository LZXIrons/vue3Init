<template>
	<div class="login-box">
		<el-form
			class="w-450px pt-50px pl-35px pr-35px pb-30px"
			:model="form"
			ref="form"
			label-width="80px"
			:inline="false"
			size="default"
			label-position="top"
		>
			<div class="form-title">管理后台</div>
			<el-form-item size="large">
				<el-input v-model="form.name">
					<template #prefix>
						<svg-icon name="user" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item size="large">
				<el-input v-model="form.name">
					<template #prefix>
						<svg-icon name="password" />
					</template>
				</el-input>
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
	name: '11'
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
	.form-title {
		margin: 0 auto 30px;
		overflow: hidden;
		font-size: 22px;
		font-weight: bold;
		color: #666;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
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
