declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
declare interface Window {
	WebViewJavascriptBridge: any
	WVJBCallbacks: any
	Aliplayer: any
	AliyunUpload: any
	vant: any
}
