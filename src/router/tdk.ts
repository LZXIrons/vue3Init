import { CERTIFICATEE } from '@/utils/properties/dict'

export default (to: any, from: any, next: () => void) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r: any) => r.meta && r.meta.title)

	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r: any) => r.meta && r.meta.metaTags)

	// 特殊处理
	if (to.name === 'write') {
		document.title = CERTIFICATEE[to.query.type] || nearestWithTitle.meta.title
	} else {
		if (nearestWithTitle) {
			document.title = nearestWithTitle.meta.title
		}
	}

	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
		(el: any) => {
			el.parentNode.removeChild(el)
		}
	)
	if (!nearestWithMeta) return next()

	nearestWithMeta.meta.metaTags
		.map((tagDef: any) => {
			const tag = document.createElement('meta')
			Object.keys(tagDef).forEach(key => {
				tag.setAttribute(key, tagDef[key])
			})
			tag.setAttribute('data-vue-router-controlled', '')
			return tag
		})
		.forEach((tag: any) => document.head.appendChild(tag))
	next()
}
