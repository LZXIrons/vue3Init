/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由
 */
import Pages from 'vite-plugin-pages'
export const ConfigPagesPlugin = () => {
	return Pages({
		dirs: [
			{ dir: 'src/views', baseRoute: '' }
			// { dir: 'src/views/test', baseRoute: 'views' }
		],
		extensions: ['vue', 'md'],
		exclude: ['**/components/*.vue']
	})
}
// /**
//  * @name ConfigPagesPlugin
//  * @description 动态生成路由
//  */
// import Pages from 'vite-plugin-pages'
// export const ConfigPagesPlugin = () => {
// 	return Pages({
// 		pagesDir: [{ dir: 'src/views', baseRoute: '' }],
// 		extensions: ['vue', 'md'],
// 		exclude: ['**/components/*.vue'],
// 		nuxtStyle: true
// 	})
// }
