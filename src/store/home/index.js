import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const moduleHome = {
	namespaced: true,
	state: {
		test: 0
	},
	getters: getters,
	mutations: mutations,
	actions: actions
};

export default moduleHome