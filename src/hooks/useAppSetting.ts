export function useAppSetting() {
	const iconSize = ref(22)
	const iconXsSize = ref(18)
	return {
		iconSize,
		iconXsSize
	}
}
