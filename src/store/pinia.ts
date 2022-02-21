import { defineStore } from 'pinia'

export const testStore = defineStore({
	id: 'app',
	state() {
		return {
			test: 1
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
		}
	}
})
