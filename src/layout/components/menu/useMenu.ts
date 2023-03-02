import {
	Planet,
	Music,
	VideoOne,
	Fm,
	Like,
	Computer,
	DownloadThree,
	PlayTwo
} from '@icon-park/vue-next'

export function useMenu() {
	const menus = [
		{
			name: '在线音乐',
			menus: [
				{
					name: '推荐',
					key: 'discover',
					icon: Planet,
					theme: 'outline'
				},
				{
					name: '音乐馆',
					key: 'music',
					icon: Music,
					theme: 'outline'
				},
				{
					name: '视频',
					key: 'video',
					icon: VideoOne,
					theme: 'outline'
				},
				{
					name: '电台',
					key: 'dj',
					icon: Fm,
					theme: 'outline'
				}
			]
		},
		{
			name: '我的音乐',
			menus: [
				{
					name: '我喜欢',
					key: 'love',
					icon: Like,
					theme: 'outline'
				},
				{
					name: '本地歌曲',
					key: 'local',
					icon: Computer,
					theme: 'outline'
				},
				{
					name: '下载歌曲',
					key: 'download',
					icon: DownloadThree,
					theme: 'outline'
				},
				{
					name: '最近播放',
					key: 'recently',
					icon: PlayTwo,
					theme: 'outline'
				}
			]
		}
	]
	const route = useRoute()
	const router = useRouter()
	const currentKey = ref('discover')
	const toUrl = url => {
		router.push({
			path: url
		})
	}
	watchEffect(() => {
		currentKey.value = route.name as string
	})
	onMounted(() => {})
	return {
		currentKey,
		toUrl,
		menus
	}
}
