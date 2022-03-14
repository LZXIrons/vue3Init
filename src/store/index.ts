import { createStore } from 'vuex'

export const testStore = createStore({
	state: {
		test: 1,
		theme: 'dark'
	},
	getters: {
		getTest(state) {
			return state.test
		}
	},
	mutations: {
		addTest(state) {
			++state.test
		}
	},
	actions: {},
	modules: {}
})
