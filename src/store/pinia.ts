import { defineStore } from 'pinia'

export const testStore = defineStore({
	id: 'app',
	state() {
		return {
			test: 1,
			theme: 'dark'
		}
	},
	getters: {
		getTest(): number {
			return this.test
		}
	},
	actions: {
		addTest() {
			this.test += 1
		},
		toggleTheme(dark) {
			// if (dark) {
			// 	this.theme = 'dark'
			// 	document.documentElement.classList.add('dark')
			// } else {
			// 	this.theme = 'light'
			// 	document.documentElement.classList.remove('dark')
			// }
		}
	}
})
