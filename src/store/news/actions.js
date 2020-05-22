const actions = {
  reqnavtitle:{
  	root:true,
  	handler({commit}, todo) {
    	commit('navtitle', todo)
  	}
  },
  reqcontlist({commit}, todo) {
    commit('contlist', todo)
  }
};

export default actions
