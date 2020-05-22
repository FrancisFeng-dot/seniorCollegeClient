import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const moduleNews = {
	namespaced: true,
	state: {
		navtitle: null,
		contlist:[]
	},
	getters: getters,
	mutations: mutations,
	actions: actions
};

export default moduleNews