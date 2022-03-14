/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
import AutoImport from 'unplugin-auto-import/vite'
export const AutoImportDeps = () => {
	return AutoImport({
		dts: 'src/auto-imports.d.ts',
		imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
		// Generate corresponding .eslintrc-auto-import.json file.
		// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
		eslintrc: {
			enabled: true, // Default `false`
			filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
			globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		}
	})
}
