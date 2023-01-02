<template>
	<div style="font-size: 18px">
		<van-button type="primary" @click="handleShow">主要按钮</van-button>
		<van-button type="success">成功按钮</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<img
			src="https://image7.wbiao.co/mall/1d44af911d464743a8c5660c2c193c5e.png"
			alt=""
		/>

		{{ title }}---{{ userInfo.name }}-------------{{ fullName }}
		<br />
		<br />
		<br />
		<input type="text" v-model="title" />
		{{ title }}
		<br />
		<br />
		<br />
		<input type="text" v-model="userInfo.name" />
		{{ userInfo.name }}
		<br />
		<br />
		<br />
		<input type="text" v-model="userInfo.age" />
		{{ userInfo.age }}
		<br />
		<br />
		<br />
		<input type="text" v-model="obj.userName" />
		{{ obj.userName }}
		{{ test }}
		<br />
		<br />
		<br />
		<div>{{ dialogCountDown }}</div>
		<button class="red" @click="handleTitle">点击改变标题</button>
		<Popup v-model:isShow="isShow" @close="closeHandle"></Popup>
		<div v-for="(item, index) in imgListData" :key="index">
			<!-- <img src="/src/assets/watch-1-0.png" alt="" data-v-5752faac="" /> -->
		</div>
		<!-- <a-button type="primary"> Primary </a-button> -->
	</div>
</template>

<script lang="ts" setup>
import Popup from '@/components/Popup/popup.vue'
import { findGoodsDetail } from '@/api/test'
import { TestClass, DefineClass, NewDefineClass } from '@/entity/demo'
import { Toast } from 'vant'
import { useCountDown } from '@vant/use'
import {
	onMounted,
	onUpdated,
	provide,
	reactive,
	ref,
	computed,
	watch,
	watchEffect
} from 'vue'
onMounted(async () => {
	const res = await findGoodsDetail({
		id: 10367
		// 	actid: 111551188
	})
	console.log('res', res)
})
onUpdated(() => {
	console.log('-------------onUpdated')
})
provide('location', {
	address: '广州'
})
Toast('提示内容')
const dialogCountDown = useCountDown({
	time: 10 * 1000
})

const closeHandle = () => console.log('close')
// const theme = {
// 	color: 'red'
// }

const imgListData = [...Array(4)].map(
	(_, index) => `./assets/watch-1-${index}.png`
)
// const res: ImgListInterface = {
//   name: 10
// }
// const test: ResData<number> = {
//   name: 10
// }

const copyDefineClass = new DefineClass<number>('张三', 10)
const copyNewDefineClass = new NewDefineClass('李四', 20)
const test1 = new TestClass('李四')
console.log('------------test', test1)
// console.log('------------ImgListInterface', res)
// console.log('------------ResData', test1)
console.log('------------DefineClass', copyDefineClass.run())
console.log(
	'------------NewDefineClass------子类继承',
	copyNewDefineClass.run()
)
// console.log('------------beforeCreate')

// inject: ['provideName'],
// 原始数据，不能响应式
const obj = {
	userName: '张三'
}
// 设置响应数据,reactive 对象类型
const userInfo = reactive({
	name: 'userInfoName',
	age: 20
})
// 设置响应数据,ref 字符串，整型，数组等
const title = ref('单独的标题')
// computed
const fullName = computed(() => {
	return userInfo.name
})
const test = computed(() => {
	return userInfo.name + '1'
})
const isShow = ref(false)
// method, ref 和 reactive 区别改变
const handleTitle = () => {
	title.value = '点击改变标题'
	userInfo.name = '点击改变名称'
}
const handleShow = () => {
	console.log('点击了')
	isShow.value = true
}
// watchEffect只有两个（副作用函数，配置）
watchEffect(() => {
	console.log('watch监听变量', userInfo.name)
})
// deep和immediate只对watch有用,只能监听整个对象
watch(userInfo as any, (newName, oldName) => {
	console.log('watch监听变量', newName, oldName)
})
</script>

<style scoped lang="less">
input {
	width: 750px;
	padding: 0;
	border: 0;
}
img {
	width: 100%;
	height: 200px;
}
:global(.red) {
	color: red;
}
</style>
<route>
{
    meta: {
        title: "测试",
        constant: true,
        layout: false
    }
}
</route>
